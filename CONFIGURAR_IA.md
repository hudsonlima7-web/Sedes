# 🤖 Como Configurar o Tutor IA (100% GRATUITO!)

O Tutor IA usa a **API Groq**, que é **totalmente gratuita** e muito poderosa!

## 📋 Passo a Passo

### 1️⃣ Criar Conta na Groq

1. Acesse: **https://console.groq.com/**
2. Clique em **"Sign Up"** (ou "Create Account")
3. Use seu e-mail do Google ou GitHub para criar conta
4. Confirme seu e-mail

### 2️⃣ Gerar Chave da API

1. Após fazer login, vá em **"API Keys"** no menu lateral
2. Clique em **"Create API Key"**
3. Dê um nome (ex: "SEDES DF 2026")
4. Clique em **"Create"**
5. **COPIE A CHAVE** (começa com `gsk_...`)
   - ⚠️ **IMPORTANTE**: Você só verá a chave UMA VEZ!
   - Salve em um lugar seguro

### 3️⃣ Configurar na Plataforma

#### Opção A: Via Painel Admin (RECOMENDADO)

1. Faça login na plataforma
2. Clique em **"🔐 Admin"** no menu lateral
3. Faça login com:
   - Usuário: `admin`
   - Senha: `Hudson*`
4. Vá em **"⚙️ Configurações"**
5. Cole sua chave no campo **"Chave da API Groq"**
6. Clique em **"💾 Salvar Chave"**
7. Clique em **"🧪 Testar Conexão"** para verificar
8. Pronto! O Tutor IA já está funcionando! 🎉

#### Opção B: Via Console do Navegador (Avançado)

1. Abra a plataforma
2. Pressione **F12** para abrir o Console
3. Digite:
   ```javascript
   localStorage.setItem('groqApiKey', 'SUA_CHAVE_AQUI');
   ```
4. Pressione **Enter**
5. Recarregue a página (**F5**)

### 4️⃣ Testar o Tutor IA

1. Vá em **"🤖 Tutor IA"** no menu
2. Digite uma pergunta, por exemplo:
   - "Explique o SUAS resumidamente"
   - "Faça 3 questões sobre LOAS"
   - "Diferença entre CRAS e CREAS"
3. Pressione **Enter** ou clique em **➤**
4. Aguarde a resposta (leva 2-5 segundos)

---

## ✅ Verificar se Está Funcionando

### Sinais de que está OK:
- ✅ Não aparece mensagem de erro vermelha
- ✅ O Tutor responde suas perguntas
- ✅ As respostas são sobre o concurso SEDES DF

### Sinais de problema:
- ❌ Mensagem: "Configure sua chave da API"
  - **Solução**: Siga o passo 3 novamente
- ❌ Mensagem: "Chave inválida"
  - **Solução**: Verifique se copiou a chave completa (começa com `gsk_`)
- ❌ Mensagem: "Erro de conexão"
  - **Solução**: Verifique sua internet

---

## 🆓 Limites Gratuitos da Groq

A API Groq é **100% gratuita** com limites generosos:

- ✅ **6.000 requisições por minuto**
- ✅ **30.000 tokens por minuto**
- ✅ Modelo: **Llama 3.3 70B** (muito poderoso!)

Para uso normal de estudos, você **nunca vai atingir o limite**!

---

## 🔒 Segurança

### ⚠️ IMPORTANTE:

1. **NÃO compartilhe sua chave** com outras pessoas
2. **NÃO poste sua chave** em redes sociais ou GitHub
3. Se sua chave vazar:
   - Vá em https://console.groq.com/
   - Delete a chave antiga
   - Crie uma nova chave
   - Atualize na plataforma

### Como a chave é armazenada:

- A chave fica salva no **localStorage** do seu navegador
- **NÃO é enviada** para nenhum servidor nosso
- É usada **apenas** para se comunicar com a API da Groq
- Se limpar o cache do navegador, precisará configurar novamente

---

## 🆘 Problemas Comuns

### "Limite de uso atingido"
- **Causa**: Você fez muitas perguntas muito rápido
- **Solução**: Aguarde 1 minuto e tente novamente

### "Chave inválida"
- **Causa**: Chave copiada errada ou expirada
- **Solução**: Gere uma nova chave e configure novamente

### "Erro de conexão"
- **Causa**: Problema de internet ou API fora do ar
- **Solução**: Verifique sua internet e tente novamente

---

## 💡 Dicas de Uso

### Perguntas que funcionam bem:
- ✅ "Explique [tema] resumidamente"
- ✅ "Faça 3 questões sobre [matéria]"
- ✅ "Diferença entre [conceito A] e [conceito B]"
- ✅ "Quais os pontos mais importantes de [lei]?"
- ✅ "Crie um resumo de [assunto]"

### Perguntas específicas do concurso:
- ✅ "Explique o SUAS para o concurso SEDES DF"
- ✅ "Faça questões estilo Quadrix sobre LOAS"
- ✅ "Estratégia para fazer os dois cargos"
- ✅ "Diferença CRAS vs CREAS"

---

## 🎯 Próximos Passos

Depois de configurar o Tutor IA:

1. ✅ Explore as **sugestões de perguntas** na página do Tutor
2. ✅ Use o Tutor para **tirar dúvidas** durante os estudos
3. ✅ Peça para criar **questões personalizadas**
4. ✅ Solicite **resumos** dos temas mais difíceis
5. ✅ Peça **análise dos seus pontos fracos**

---

## 📞 Suporte

Se tiver dúvidas:
- Consulte: `INICIO_RAPIDO.md`
- Consulte: `GUIA_ADMIN.md`
- Consulte: `SISTEMA_LOGIN.md`

**Bons estudos! 🚀**
