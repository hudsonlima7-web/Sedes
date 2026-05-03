# ✏️ Edição de Cadastro de Alunos (Admin)

## 📋 Visão Geral

Sistema completo de edição de cadastro de alunos pelo administrador, incluindo alteração de senha, dados pessoais, plano e status.

**Data de Implementação:** 3 de maio de 2026  
**Status:** ✅ IMPLEMENTADO E FUNCIONAL

---

## 🎯 Funcionalidades

### O que o Admin Pode Editar

✅ **Dados Pessoais:**
- Nome completo
- E-mail
- Telefone
- CPF

✅ **Dados Acadêmicos:**
- Cargo desejado
- Plano contratado
- Valor da mensalidade

✅ **Segurança:**
- Senha do aluno
- Status ativo/inativo

✅ **Validações:**
- E-mail único (não pode duplicar)
- Campos obrigatórios
- Formato de dados
- Máscaras automáticas

---

## 🚀 Como Usar

### Passo a Passo

**1. Acessar Painel Admin**
```
1. Faça login como admin
2. Vá em "Lista de Alunos"
3. Encontre o aluno desejado
```

**2. Abrir Edição**
```
1. Clique no botão "✏️ Editar" ao lado do aluno
2. Modal de edição será aberto
3. Todos os dados atuais serão carregados
```

**3. Editar Dados**
```
1. Altere os campos desejados
2. Para alterar senha: digite nova senha
3. Para manter senha: deixe campo em branco
4. Marque/desmarque "Aluno ativo"
```

**4. Salvar**
```
1. Clique em "💾 Salvar Alterações"
2. Sistema valida os dados
3. Cadastro é atualizado
4. Lista é recarregada automaticamente
```

---

## 📝 Campos Editáveis

### 👤 Nome Completo
- **Obrigatório:** Sim
- **Formato:** Texto livre
- **Exemplo:** João Silva Santos

### 📧 E-mail
- **Obrigatório:** Sim
- **Formato:** email@dominio.com
- **Validação:** Deve ser único (não pode existir em outro aluno)
- **Exemplo:** joao.silva@email.com

### 📱 Telefone
- **Obrigatório:** Não
- **Formato:** (00) 00000-0000
- **Máscara:** Automática
- **Exemplo:** (61) 99999-8888

### 📄 CPF
- **Obrigatório:** Não
- **Formato:** 000.000.000-00
- **Máscara:** Automática
- **Exemplo:** 123.456.789-00

### 💼 Cargo Desejado
- **Obrigatório:** Sim
- **Opções:**
  - Agente
  - Escrivão
  - Papiloscopista
  - Perito
  - Delegado
  - Outro

### 📦 Plano
- **Obrigatório:** Sim
- **Opções:**
  - Básico - R$ 97/mês
  - Pro - R$ 197/mês
  - VIP - R$ 397/mês

### 💰 Valor Mensalidade
- **Obrigatório:** Sim
- **Formato:** Número decimal
- **Mínimo:** 0
- **Exemplo:** 197.00
- **Nota:** Atualiza mensalidades futuras automaticamente

### 🔐 Nova Senha
- **Obrigatório:** Não
- **Formato:** Mínimo 4 caracteres
- **Comportamento:**
  - Se preenchido: altera a senha
  - Se vazio: mantém senha atual
- **Exemplo:** NovaSenha123

### ✅ Aluno Ativo
- **Tipo:** Checkbox
- **Comportamento:**
  - Marcado: Aluno pode acessar a plataforma
  - Desmarcado: Aluno bloqueado (inadimplente ou suspenso)

---

## 🔒 Validações

### Validações Automáticas

✅ **Nome e E-mail Obrigatórios**
```
Se vazio → Erro: "Nome e e-mail são obrigatórios!"
```

✅ **E-mail Único**
```
Se já existe em outro aluno → Erro: "Este e-mail já está cadastrado!"
```

✅ **Valor Válido**
```
Se negativo → Erro: "Valor da mensalidade inválido!"
```

✅ **Senha Mínima**
```
Se < 4 caracteres → Erro: "Senha deve ter no mínimo 4 caracteres!"
```

✅ **Formato de E-mail**
```
Validação HTML5 automática
```

---

## 💡 Casos de Uso

### Caso 1: Alterar Apenas a Senha

```
1. Abrir edição do aluno
2. Ir direto no campo "Nova Senha"
3. Digitar nova senha
4. Salvar
5. Senha alterada, demais dados mantidos
```

### Caso 2: Mudar Plano do Aluno

```
1. Abrir edição do aluno
2. Alterar campo "Plano" (ex: Básico → Pro)
3. Alterar campo "Valor Mensalidade" (ex: 97 → 197)
4. Salvar
5. Plano atualizado + mensalidades futuras atualizadas
```

### Caso 3: Bloquear Aluno Inadimplente

```
1. Abrir edição do aluno
2. Desmarcar checkbox "Aluno ativo"
3. Salvar
4. Aluno não consegue mais fazer login
```

### Caso 4: Reativar Aluno

```
1. Abrir edição do aluno
2. Marcar checkbox "Aluno ativo"
3. Salvar
4. Aluno pode fazer login novamente
```

### Caso 5: Corrigir Dados Cadastrais

```
1. Abrir edição do aluno
2. Corrigir nome, telefone, CPF, etc.
3. Deixar senha em branco (não alterar)
4. Salvar
5. Dados atualizados, senha mantida
```

---

## 🛠️ Comandos Via Console

### Editar Aluno Programaticamente

```javascript
// Buscar aluno
let alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const alunoIndex = alunos.findIndex(a => a.email === 'email@exemplo.com');

// Alterar dados
alunos[alunoIndex].nome = 'Novo Nome';
alunos[alunoIndex].plano = 'vip';
alunos[alunoIndex].valorMensalidade = 397;
alunos[alunoIndex].senha = 'NovaSenha123';
alunos[alunoIndex].ativo = true;

// Salvar
localStorage.setItem('alunos', JSON.stringify(alunos));
console.log('✅ Aluno atualizado!');
```

### Alterar Senha de Vários Alunos

```javascript
// Resetar senha de todos para "Sedes"
let alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
alunos.forEach(a => a.senha = 'Sedes');
localStorage.setItem('alunos', JSON.stringify(alunos));
console.log('✅ Senhas resetadas para todos os alunos!');
```

### Atualizar Plano em Massa

```javascript
// Mudar todos de Básico para Pro
let alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
alunos.forEach(a => {
  if(a.plano === 'basico'){
    a.plano = 'pro';
    a.valorMensalidade = 197;
  }
});
localStorage.setItem('alunos', JSON.stringify(alunos));
console.log('✅ Planos atualizados!');
```

### Bloquear Alunos Inadimplentes

```javascript
// Buscar alunos com mensalidades vencidas
const mensalidades = JSON.parse(localStorage.getItem('mensalidades') || '[]');
const hoje = new Date();
const inadimplentes = mensalidades
  .filter(m => m.status === 'vencido' && new Date(m.vencimento) < hoje)
  .map(m => m.alunoId);

// Bloquear alunos
let alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
alunos.forEach(a => {
  if(inadimplentes.includes(a.id)){
    a.ativo = false;
  }
});
localStorage.setItem('alunos', JSON.stringify(alunos));
console.log('✅ Inadimplentes bloqueados:', inadimplentes.length);
```

---

## 📊 Impacto das Alterações

### Alteração de Plano/Valor

**O que acontece:**
- ✅ Plano do aluno é atualizado
- ✅ Valor da mensalidade é atualizado
- ✅ **Mensalidades futuras** são atualizadas com novo valor
- ❌ Mensalidades passadas **não** são alteradas

**Exemplo:**
```
Aluno tinha plano Básico (R$ 97)
Admin muda para Pro (R$ 197)

Resultado:
- Mensalidades pagas: R$ 97 (mantém)
- Mensalidades futuras: R$ 197 (atualiza)
```

### Alteração de Status (Ativo/Inativo)

**Aluno Ativo → Inativo:**
- ❌ Não consegue fazer login
- ❌ Acesso bloqueado à plataforma
- ✅ Dados mantidos no sistema
- ✅ Pode ser reativado a qualquer momento

**Aluno Inativo → Ativo:**
- ✅ Pode fazer login novamente
- ✅ Acesso liberado à plataforma
- ✅ Progresso mantido

### Alteração de Senha

**Comportamento:**
- Se campo preenchido: senha é alterada
- Se campo vazio: senha atual é mantida
- Aluno deve usar nova senha no próximo login
- Não há notificação automática ao aluno

**Recomendação:**
```
Após alterar senha de um aluno:
1. Anote a nova senha
2. Envie para o aluno via WhatsApp/Email
3. Oriente a alterar após login
```

---

## 🐛 Problemas Comuns

### "E-mail já está cadastrado em outro aluno"

**Causa:** Tentou usar e-mail que já existe  
**Solução:** 
1. Verifique se digitou corretamente
2. Use outro e-mail
3. Ou edite o outro aluno primeiro

### "Aluno não encontrado"

**Causa:** Aluno foi excluído ou ID inválido  
**Solução:**
1. Recarregue a página
2. Verifique se aluno ainda existe
3. Tente novamente

### "Valor da mensalidade inválido"

**Causa:** Valor negativo ou inválido  
**Solução:** Digite um valor positivo (ex: 197.00)

### Modal não abre

**Causa:** Erro no JavaScript ou ID inválido  
**Solução:**
1. Abra o console (F12)
2. Verifique erros
3. Recarregue a página
4. Tente novamente

### Máscaras não funcionam

**Causa:** JavaScript não carregou  
**Solução:**
1. Recarregue a página
2. Digite manualmente no formato correto
3. Verifique console por erros

---

## 💡 Dicas

### Para Administradores

**1. Sempre verifique antes de salvar**
- Revise todos os dados alterados
- Confirme valores de mensalidade
- Verifique status ativo/inativo

**2. Documente alterações importantes**
- Anote mudanças de plano
- Registre alterações de senha
- Mantenha histórico de bloqueios

**3. Comunique o aluno**
- Avise sobre mudanças de plano
- Envie nova senha se alterou
- Explique motivo de bloqueio

**4. Use edição em massa com cuidado**
- Teste com um aluno primeiro
- Faça backup antes
- Verifique resultados

**5. Monitore mensalidades**
- Ao mudar plano, verifique mensalidades
- Confirme que valores foram atualizados
- Ajuste manualmente se necessário

---

## 🔄 Fluxo Completo

### Edição Simples

```
1. Admin clica em "✏️ Editar"
   ↓
2. Modal abre com dados atuais
   ↓
3. Admin altera campos desejados
   ↓
4. Admin clica em "Salvar"
   ↓
5. Sistema valida dados
   ↓
6. Dados são atualizados
   ↓
7. Lista é recarregada
   ↓
8. Modal fecha automaticamente
   ↓
9. Notificação de sucesso
```

### Edição com Mudança de Plano

```
1. Admin abre edição
   ↓
2. Altera plano (Básico → Pro)
   ↓
3. Altera valor (97 → 197)
   ↓
4. Salva alterações
   ↓
5. Sistema atualiza aluno
   ↓
6. Sistema atualiza mensalidades futuras
   ↓
7. Confirmação de sucesso
```

---

## ✅ Checklist de Implementação

### Funcionalidades
- [x] Botão "Editar" na lista de alunos
- [x] Modal de edição completo
- [x] Carregamento de dados atuais
- [x] Edição de todos os campos
- [x] Campo de senha opcional
- [x] Checkbox de status ativo
- [x] Máscaras automáticas (telefone, CPF)
- [x] Validação de e-mail único
- [x] Validação de campos obrigatórios
- [x] Atualização de mensalidades futuras
- [x] Mensagens de erro
- [x] Mensagens de sucesso
- [x] Recarga automática da lista
- [x] Fechamento automático do modal
- [x] Logs no console
- [x] Documentação completa

### Segurança
- [x] Validação de dados
- [x] Verificação de duplicidade
- [x] Confirmação de alterações
- [x] Logs de auditoria
- [x] Proteção contra valores inválidos

---

## 📞 Suporte

### Documentação Relacionada
- `SISTEMA_SENHAS.md` - Sistema de senhas
- `COMANDOS_RAPIDOS.md` - Comandos úteis
- `GUIA_ADMIN.md` - Guia do administrador

### Problemas
- 📧 suporte@sedesdf2026.com.br
- 💬 (61) 99999-9999

---

## 🎯 Resumo

**Sistema Implementado:**
- ✅ Edição completa de cadastro
- ✅ Alteração de senha pelo admin
- ✅ Mudança de plano e valor
- ✅ Controle de status ativo/inativo
- ✅ Validações robustas
- ✅ Interface intuitiva
- ✅ Máscaras automáticas
- ✅ Atualização de mensalidades

**Benefícios:**
- 🎯 Controle total sobre cadastros
- 🔐 Gerenciamento de senhas
- 💰 Flexibilidade de planos
- 🚫 Bloqueio de inadimplentes
- ✅ Validações de segurança
- 📱 Interface amigável

---

**✏️ Sistema de Edição de Cadastro - SEDES DF 2026**

**Implementado e funcional!**

**Data:** 3 de maio de 2026  
**Versão:** 1.0.0  
**Status:** ✅ PRODUCTION READY
