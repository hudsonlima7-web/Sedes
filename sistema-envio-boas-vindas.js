/**
 * Sistema de Envio Automático de Boas-Vindas
 * SEDES DF 2026
 * 
 * Envia email e WhatsApp com credenciais para novos alunos
 */

// ================================================================
// CONFIGURAÇÕES
// ================================================================

const CONFIG = {
  // API de Email (exemplo: SendGrid, Mailgun, AWS SES)
  emailAPI: {
    provider: 'sendgrid', // ou 'mailgun', 'ses', 'smtp'
    apiKey: 'SUA_CHAVE_API_EMAIL',
    fromEmail: 'noreply@sedesdf2026.com.br',
    fromName: 'SEDES DF 2026',
    replyTo: 'suporte@sedesdf2026.com.br'
  },
  
  // API de WhatsApp (exemplo: Twilio, WhatsApp Business API)
  whatsappAPI: {
    provider: 'twilio', // ou 'whatsapp-business-api'
    apiKey: 'SUA_CHAVE_API_WHATSAPP',
    accountSid: 'SEU_ACCOUNT_SID',
    fromNumber: '+5561999999999'
  },
  
  // URLs da Plataforma
  platform: {
    url: 'https://sedes-12y.pages.dev',
    loginUrl: 'https://sedes-12y.pages.dev/index.html',
    configIAUrl: 'https://sedes-12y.pages.dev/configurar-chave.html'
  }
};

// ================================================================
// GERADOR DE SENHA TEMPORÁRIA
// ================================================================

function gerarSenhaTemporaria() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  const especiais = '!@#$%';
  let senha = '';
  
  // 6 caracteres alfanuméricos
  for (let i = 0; i < 6; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  // 1 caractere especial
  senha += especiais.charAt(Math.floor(Math.random() * especiais.length));
  
  // 1 número
  senha += Math.floor(Math.random() * 10);
  
  return senha;
}

// ================================================================
// PROCESSADOR DE TEMPLATES
// ================================================================

function processarTemplate(template, dados) {
  let resultado = template;
  
  // Substituir todas as variáveis {{VARIAVEL}}
  Object.keys(dados).forEach(chave => {
    const regex = new RegExp(`{{${chave}}}`, 'g');
    resultado = resultado.replace(regex, dados[chave]);
  });
  
  return resultado;
}

// ================================================================
// ENVIO DE EMAIL
// ================================================================

async function enviarEmail(dadosAluno) {
  const { nome, email, senha, cargo } = dadosAluno;
  
  // Carregar template HTML
  const templateHTML = await fetch('TEMPLATE_BOAS_VINDAS_EMAIL.html')
    .then(res => res.text());
  
  // Dados para substituição
  const dados = {
    NOME_ALUNO: nome,
    EMAIL_ALUNO: email,
    SENHA_TEMPORARIA: senha,
    CARGO_ALUNO: cargo,
    LINK_PLATAFORMA: CONFIG.platform.loginUrl
  };
  
  // Processar template
  const htmlFinal = processarTemplate(templateHTML, dados);
  
  // Enviar via API (exemplo com SendGrid)
  if (CONFIG.emailAPI.provider === 'sendgrid') {
    return await enviarViaSendGrid(email, htmlFinal, dados);
  }
  
  // Adicione outros provedores aqui
  console.log('Email preparado para:', email);
  return { success: true, provider: 'mock' };
}

async function enviarViaSendGrid(destinatario, html, dados) {
  const url = 'https://api.sendgrid.com/v3/mail/send';
  
  const payload = {
    personalizations: [{
      to: [{ email: destinatario, name: dados.NOME_ALUNO }],
      subject: `🎉 Bem-vindo(a) ao SEDES DF 2026, ${dados.NOME_ALUNO}!`
    }],
    from: {
      email: CONFIG.emailAPI.fromEmail,
      name: CONFIG.emailAPI.fromName
    },
    reply_to: {
      email: CONFIG.emailAPI.replyTo
    },
    content: [{
      type: 'text/html',
      value: html
    }]
  };
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.emailAPI.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      console.log('✅ Email enviado com sucesso para:', destinatario);
      return { success: true, provider: 'sendgrid' };
    } else {
      console.error('❌ Erro ao enviar email:', await response.text());
      return { success: false, error: 'Falha no envio' };
    }
  } catch (error) {
    console.error('❌ Erro na requisição:', error);
    return { success: false, error: error.message };
  }
}

// ================================================================
// ENVIO DE WHATSAPP
// ================================================================

async function enviarWhatsApp(dadosAluno) {
  const { nome, email, senha, cargo, telefone } = dadosAluno;
  
  // Carregar template de texto
  const templateTexto = await fetch('TEMPLATE_BOAS_VINDAS_WHATSAPP.txt')
    .then(res => res.text());
  
  // Dados para substituição
  const dados = {
    NOME_ALUNO: nome,
    EMAIL_ALUNO: email,
    SENHA_TEMPORARIA: senha,
    CARGO_ALUNO: cargo,
    LINK_PLATAFORMA: CONFIG.platform.url
  };
  
  // Processar template
  const mensagemFinal = processarTemplate(templateTexto, dados);
  
  // Enviar via API (exemplo com Twilio)
  if (CONFIG.whatsappAPI.provider === 'twilio') {
    return await enviarViaTwilio(telefone, mensagemFinal);
  }
  
  console.log('WhatsApp preparado para:', telefone);
  return { success: true, provider: 'mock' };
}

async function enviarViaTwilio(telefone, mensagem) {
  const url = `https://api.twilio.com/2010-04-01/Accounts/${CONFIG.whatsappAPI.accountSid}/Messages.json`;
  
  // Formatar número (adicionar código do país se necessário)
  const numeroFormatado = telefone.startsWith('+') ? telefone : `+55${telefone.replace(/\D/g, '')}`;
  
  const payload = new URLSearchParams({
    From: `whatsapp:${CONFIG.whatsappAPI.fromNumber}`,
    To: `whatsapp:${numeroFormatado}`,
    Body: mensagem
  });
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${CONFIG.whatsappAPI.accountSid}:${CONFIG.whatsappAPI.apiKey}`),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: payload
    });
    
    if (response.ok) {
      console.log('✅ WhatsApp enviado com sucesso para:', numeroFormatado);
      return { success: true, provider: 'twilio' };
    } else {
      console.error('❌ Erro ao enviar WhatsApp:', await response.text());
      return { success: false, error: 'Falha no envio' };
    }
  } catch (error) {
    console.error('❌ Erro na requisição:', error);
    return { success: false, error: error.message };
  }
}

// ================================================================
// CADASTRO DE NOVO ALUNO
// ================================================================

async function cadastrarNovoAluno(dadosAluno) {
  console.log('📝 Cadastrando novo aluno:', dadosAluno.nome);
  
  // Gerar senha temporária
  const senhaTemporaria = gerarSenhaTemporaria();
  
  // Preparar dados completos
  const alunoCompleto = {
    ...dadosAluno,
    senha: senhaTemporaria,
    dataCadastro: new Date().toISOString(),
    status: 'ativo',
    primeiroAcesso: true
  };
  
  // Salvar no banco de dados (localStorage para exemplo)
  const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
  alunos.push(alunoCompleto);
  localStorage.setItem('alunos', JSON.stringify(alunos));
  
  console.log('✅ Aluno cadastrado no sistema');
  
  // Enviar boas-vindas
  const resultados = await enviarBoasVindas(alunoCompleto);
  
  return {
    success: true,
    aluno: alunoCompleto,
    envios: resultados
  };
}

// ================================================================
// ENVIO COMPLETO DE BOAS-VINDAS
// ================================================================

async function enviarBoasVindas(dadosAluno) {
  console.log('🚀 Iniciando envio de boas-vindas para:', dadosAluno.nome);
  
  const resultados = {
    email: { success: false },
    whatsapp: { success: false }
  };
  
  // Enviar Email
  try {
    resultados.email = await enviarEmail(dadosAluno);
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    resultados.email = { success: false, error: error.message };
  }
  
  // Enviar WhatsApp
  try {
    resultados.whatsapp = await enviarWhatsApp(dadosAluno);
  } catch (error) {
    console.error('❌ Erro ao enviar WhatsApp:', error);
    resultados.whatsapp = { success: false, error: error.message };
  }
  
  // Log de resultados
  console.log('📊 Resultados do envio:');
  console.log('  Email:', resultados.email.success ? '✅ Enviado' : '❌ Falhou');
  console.log('  WhatsApp:', resultados.whatsapp.success ? '✅ Enviado' : '❌ Falhou');
  
  return resultados;
}

// ================================================================
// EXEMPLO DE USO
// ================================================================

// Exemplo: Cadastrar novo aluno
async function exemploUso() {
  const novoAluno = {
    nome: 'Maria Silva',
    email: 'maria.silva@email.com',
    telefone: '61999887766',
    cargo: 'Especialista em Assistência Social',
    especialidade: 'servico_social',
    nivel_esp: true,
    nivel_tec: false
  };
  
  const resultado = await cadastrarNovoAluno(novoAluno);
  
  console.log('🎉 Processo concluído!');
  console.log('Senha gerada:', resultado.aluno.senha);
  console.log('Email enviado:', resultado.envios.email.success);
  console.log('WhatsApp enviado:', resultado.envios.whatsapp.success);
}

// ================================================================
// INTEGRAÇÃO COM FORMULÁRIO DE CADASTRO
// ================================================================

function integrarComFormulario() {
  const form = document.getElementById('formCadastroAluno');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const dadosAluno = {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        cargo: form.cargo.value,
        especialidade: form.especialidade?.value,
        nivel_esp: form.nivel_esp?.checked || false,
        nivel_tec: form.nivel_tec?.checked || false
      };
      
      // Mostrar loading
      const btnSubmit = form.querySelector('button[type="submit"]');
      const textoOriginal = btnSubmit.textContent;
      btnSubmit.textContent = '⏳ Cadastrando...';
      btnSubmit.disabled = true;
      
      try {
        const resultado = await cadastrarNovoAluno(dadosAluno);
        
        if (resultado.success) {
          alert(`✅ Aluno cadastrado com sucesso!\n\nCredenciais enviadas para:\n📧 ${dadosAluno.email}\n💬 ${dadosAluno.telefone}`);
          form.reset();
        } else {
          alert('❌ Erro ao cadastrar aluno. Tente novamente.');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('❌ Erro ao processar cadastro.');
      } finally {
        btnSubmit.textContent = textoOriginal;
        btnSubmit.disabled = false;
      }
    });
  }
}

// Inicializar quando o DOM estiver pronto
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', integrarComFormulario);
}

// ================================================================
// EXPORTAR FUNÇÕES
// ================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    cadastrarNovoAluno,
    enviarBoasVindas,
    enviarEmail,
    enviarWhatsApp,
    gerarSenhaTemporaria,
    processarTemplate
  };
}
