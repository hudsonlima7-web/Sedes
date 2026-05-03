# 🔐 Sistema de Senhas - SEDES DF 2026

## 📋 Visão Geral

Sistema completo de gerenciamento de senhas para alunos, com senha padrão, alteração e recuperação.

**Data de Implementação:** 3 de maio de 2026  
**Status:** ✅ IMPLEMENTADO E FUNCIONAL

---

## 🔑 Senha Padrão

### Para Novos Alunos

**Senha Padrão:** `Sedes`

Todos os novos alunos que se matricularem receberão automaticamente a senha padrão **"Sedes"**.

### Como Funciona

1. **No Checkout:**
   - Campo de senha pré-preenchido com "Sedes"
   - Aluno pode manter ou alterar durante o cadastro
   - Mensagem informativa sobre a possibilidade de alteração posterior

2. **Nas Boas-Vindas:**
   - Email e WhatsApp informam a senha padrão
   - Orientação para alterar após primeiro login

3. **Primeiro Login:**
   - Aluno usa email + senha "Sedes"
   - Recomendação para alterar senha imediatamente

---

## 🔄 Alterar Senha

### Como Alterar

**Método 1: Pelo Menu (Recomendado)**

1. Faça login na plataforma
2. No menu lateral, clique em **"🔐 Alterar Senha"**
3. Digite sua senha atual
4. Digite a nova senha (mínimo 4 caracteres)
5. Confirme a nova senha
6. Clique em **"Alterar Senha"**
7. Pronto! Senha alterada com sucesso

**Método 2: Via Console (Avançado)**

```javascript
// Buscar aluno
let alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const aluno = alunos.find(a => a.email === 'email@exemplo.com');

// Alterar senha
aluno.senha = 'novaSenha123';

// Salvar
localStorage.setItem('alunos', JSON.stringify(alunos));
```

### Requisitos

- **Senha atual:** Obrigatória para validação
- **Nova senha:** Mínimo 4 caracteres
- **Confirmação:** Deve ser idêntica à nova senha

### Validações

✅ Senha atual correta  
✅ Nova senha com mínimo 4 caracteres  
✅ Confirmação de senha idêntica  
✅ Aluno logado e válido

---

## 🆘 Recuperar Senha

### Esqueci Minha Senha

**Método 1: Tela de Login**

1. Na tela de login, clique em **"🔑 Esqueci minha senha"**
2. Digite seu e-mail cadastrado
3. Sistema reseta sua senha para **"Sedes"**
4. Faça login com a senha "Sedes"
5. Altere imediatamente para uma nova senha

**Método 2: Contato com Suporte**

1. Entre em contato com o suporte
2. Informe seu e-mail cadastrado
3. Suporte reseta sua senha para "Sedes"
4. Faça login e altere a senha

**Método 3: Via Console (Admin)**

```javascript
// Buscar aluno por email
let alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const aluno = alunos.find(a => a.email === 'email@exemplo.com');

// Resetar senha para padrão
aluno.senha = 'Sedes';

// Salvar
localStorage.setItem('alunos', JSON.stringify(alunos));

console.log('✅ Senha resetada para: Sedes');
```

---

## 📧 Templates de Boas-Vindas

### WhatsApp

```
🔑 SEUS DADOS DE ACESSO
━━━━━━━━━━━━━━━━━━━━

📧 E-mail/Login:
email@exemplo.com

🔐 Sua Senha:
Sedes

⚠️ IMPORTANTE: 
Altere sua senha após o primeiro login!
Menu → Alterar Senha
```

### Email

```html
<div style="padding: 12px; background-color: #ffffff; border-radius: 8px;">
  <p style="margin: 0 0 4px 0; color: #718096; font-size: 12px; font-weight: 600;">
    🔐 Sua Senha
  </p>
  <p style="margin: 0; color: #2d3748; font-size: 16px; font-weight: 600; font-family: monospace;">
    Sedes
  </p>
</div>

<p style="margin: 16px 0 0 0; color: #e53e3e; font-size: 13px; text-align: center;">
  ⚠️ Altere sua senha após o primeiro login!
</p>
```

---

## 🔒 Segurança

### Boas Práticas

**Para Alunos:**
- ✅ Altere a senha padrão após primeiro login
- ✅ Use senha forte (letras, números, símbolos)
- ✅ Não compartilhe sua senha
- ✅ Não use a mesma senha de outros sites
- ✅ Altere periodicamente (a cada 90 dias)

**Para Administradores:**
- ✅ Oriente alunos a alterarem senha
- ✅ Monitore logins suspeitos
- ✅ Resete senhas apenas com validação de identidade
- ✅ Mantenha backup dos dados

### Níveis de Segurança

**Senha Fraca:** ❌
- `123456`
- `senha`
- `abc123`

**Senha Média:** ⚠️
- `Sedes123`
- `aluno2026`
- `concurso`

**Senha Forte:** ✅
- `Sedes@2026!`
- `Concurs0#DF`
- `Aprovad0$`

---

## 🛠️ Comandos Úteis

### Ver Senha de um Aluno (Admin)

```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const aluno = alunos.find(a => a.email === 'email@exemplo.com');
console.log('Senha:', aluno.senha);
```

### Resetar Senha para Padrão

```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const alunoIndex = alunos.findIndex(a => a.email === 'email@exemplo.com');
alunos[alunoIndex].senha = 'Sedes';
localStorage.setItem('alunos', JSON.stringify(alunos));
console.log('✅ Senha resetada!');
```

### Alterar Senha de Qualquer Aluno

```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const alunoIndex = alunos.findIndex(a => a.email === 'email@exemplo.com');
alunos[alunoIndex].senha = 'novaSenha123';
localStorage.setItem('alunos', JSON.stringify(alunos));
console.log('✅ Senha alterada!');
```

### Listar Alunos com Senha Padrão

```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const comSenhaPadrao = alunos.filter(a => a.senha === 'Sedes');
console.log('Alunos com senha padrão:', comSenhaPadrao.length);
console.table(comSenhaPadrao.map(a => ({
  nome: a.nome,
  email: a.email,
  dataCadastro: a.dataCadastro
})));
```

---

## 📊 Estatísticas

### Ver Uso de Senhas

```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📊 ESTATÍSTICAS DE SENHAS');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('Total de alunos:', alunos.length);
console.log('Com senha padrão:', alunos.filter(a => a.senha === 'Sedes').length);
console.log('Com senha alterada:', alunos.filter(a => a.senha !== 'Sedes').length);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
```

---

## 🐛 Problemas Comuns

### "Senha atual incorreta"

**Causa:** Senha digitada não corresponde à senha atual  
**Solução:** 
1. Verifique se está digitando corretamente
2. Tente recuperar a senha
3. Entre em contato com o suporte

### "E-mail não encontrado" (Recuperação)

**Causa:** E-mail não está cadastrado no sistema  
**Solução:**
1. Verifique se digitou o e-mail corretamente
2. Tente com outro e-mail
3. Entre em contato com o suporte

### "As senhas não coincidem"

**Causa:** Nova senha e confirmação são diferentes  
**Solução:** Digite a mesma senha nos dois campos

### "Senha deve ter no mínimo 4 caracteres"

**Causa:** Senha muito curta  
**Solução:** Use uma senha com pelo menos 4 caracteres

---

## 💡 Dicas

### Para Alunos

1. **Altere a senha padrão imediatamente**
   - Mais segurança para sua conta
   - Evita acessos não autorizados

2. **Use senha forte**
   - Combine letras, números e símbolos
   - Evite informações pessoais óbvias

3. **Não compartilhe**
   - Sua senha é pessoal e intransferível
   - Nem o suporte deve pedir sua senha

4. **Anote em local seguro**
   - Use gerenciador de senhas
   - Ou anote em papel guardado

### Para Administradores

1. **Oriente os alunos**
   - Envie lembretes sobre alteração de senha
   - Explique a importância da segurança

2. **Monitore senhas padrão**
   - Identifique alunos que não alteraram
   - Envie lembretes personalizados

3. **Facilite recuperação**
   - Tenha processo claro de validação
   - Responda rapidamente às solicitações

---

## 🔄 Fluxo Completo

### Novo Aluno

```
1. Matrícula no checkout
   ↓
2. Senha padrão "Sedes" definida
   ↓
3. Recebe boas-vindas (email + WhatsApp)
   ↓
4. Faz primeiro login com "Sedes"
   ↓
5. Altera senha no menu
   ↓
6. Usa nova senha nos próximos logins
```

### Recuperação de Senha

```
1. Esqueceu a senha
   ↓
2. Clica em "Esqueci minha senha"
   ↓
3. Digita e-mail cadastrado
   ↓
4. Sistema reseta para "Sedes"
   ↓
5. Faz login com "Sedes"
   ↓
6. Altera para nova senha
```

---

## ✅ Checklist de Implementação

### Funcionalidades
- [x] Senha padrão "Sedes" no checkout
- [x] Campo pré-preenchido
- [x] Botão "Alterar Senha" no menu
- [x] Modal de alteração de senha
- [x] Validação de senha atual
- [x] Validação de nova senha
- [x] Confirmação de senha
- [x] Link "Esqueci minha senha"
- [x] Sistema de recuperação
- [x] Reset para senha padrão
- [x] Mensagens de erro
- [x] Mensagens de sucesso
- [x] Atualização no localStorage
- [x] Documentação completa

### Segurança
- [x] Validação de senha atual
- [x] Mínimo de caracteres
- [x] Confirmação obrigatória
- [x] Verificação de aluno logado
- [x] Logs de alteração
- [x] Orientações de segurança

---

## 📞 Suporte

### Para Alunos

**Problemas com senha:**
- 📧 suporte@sedesdf2026.com.br
- 💬 (61) 99999-9999

**Recuperação de senha:**
1. Use o link "Esqueci minha senha"
2. Ou entre em contato com o suporte

### Para Administradores

**Documentação:**
- `SISTEMA_SENHAS.md` - Este arquivo
- `COMANDOS_RAPIDOS.md` - Comandos úteis
- `SEGURANCA_ADMIN.md` - Segurança do admin

---

## 🎯 Resumo

**Sistema Implementado:**
- ✅ Senha padrão "Sedes" para novos alunos
- ✅ Alteração de senha pelo menu
- ✅ Recuperação de senha na tela de login
- ✅ Validações de segurança
- ✅ Mensagens claras e informativas
- ✅ Documentação completa

**Benefícios:**
- 🔒 Mais segurança para os alunos
- 🔄 Fácil recuperação de senha
- 💡 Processo intuitivo
- ✅ Validações robustas
- 📱 Interface amigável

---

**🔐 Sistema de Senhas - SEDES DF 2026**

**Implementado e funcional!**

**Data:** 3 de maio de 2026  
**Versão:** 1.0.0  
**Status:** ✅ PRODUCTION READY
