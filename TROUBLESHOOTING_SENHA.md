# 🔧 Troubleshooting - Edição de Senha de Alunos

## 🐛 Problema Reportado

**Sintoma:** Não está conseguindo editar a senha dos alunos pelo painel admin.

---

## ✅ Melhorias Implementadas

### 1. Logs Detalhados
Adicionados logs no console para debug:
- Verificação do valor da senha digitada
- Comprimento da senha
- Validação da senha
- Confirmação de salvamento

### 2. Validação Melhorada
- Trim automático (remove espaços)
- Validação de mínimo 4 caracteres
- Mensagem de erro específica se senha < 4 caracteres

### 3. Botão Mostrar/Ocultar Senha
- Botão 👁️ ao lado do campo
- Permite visualizar a senha digitada
- Facilita verificar se digitou corretamente

### 4. Função de Debug
Nova função `verificarSenhaAluno(email)` para verificar senha atual de qualquer aluno.

---

## 🔍 Como Diagnosticar

### Passo 1: Abrir Console
```
1. Pressione F12
2. Vá na aba "Console"
3. Mantenha aberto durante o teste
```

### Passo 2: Tentar Editar Senha
```
1. Acesse "Lista de Alunos"
2. Clique em "✏️ Editar" em um aluno
3. Digite uma nova senha no campo "Nova Senha"
4. Clique no botão 👁️ para ver se digitou corretamente
5. Clique em "Salvar Alterações"
6. Observe os logs no console
```

### Passo 3: Verificar Logs
O console deve mostrar:
```javascript
🔍 Verificando senha: {
  novaSenha: "suaSenha123",
  length: 12,
  temSenha: true,
  senhaValida: true
}
✅ Senha alterada para: suaSenha123
✅ Aluno: Nome do Aluno - Nova senha salva!
💾 Dados salvos no localStorage
📋 Aluno atualizado: {id: 123, nome: "...", senha: "suaSenha123", ...}
```

### Passo 4: Verificar se Salvou
```javascript
// No console, digite:
verificarSenhaAluno('email@aluno.com')

// Deve mostrar:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Aluno: Nome do Aluno
📧 Email: email@aluno.com
🔐 Senha atual: suaSenha123
✅ Ativo: true
📦 Plano: pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🐛 Possíveis Problemas e Soluções

### Problema 1: Campo de Senha Vazio
**Sintoma:** Logs mostram `novaSenha: ""`

**Causa:** Campo não foi preenchido ou foi apagado

**Solução:**
1. Digite a senha novamente
2. Use o botão 👁️ para verificar
3. Certifique-se de que tem pelo menos 4 caracteres
4. Salve novamente

---

### Problema 2: Senha Muito Curta
**Sintoma:** Erro "A senha deve ter no mínimo 4 caracteres!"

**Causa:** Senha digitada tem menos de 4 caracteres

**Solução:**
1. Digite uma senha com 4 ou mais caracteres
2. Exemplos válidos: `1234`, `Sedes`, `senha123`
3. Salve novamente

---

### Problema 3: Senha Não Aparece nos Logs
**Sintoma:** Logs não mostram a verificação da senha

**Causa:** JavaScript não está executando ou há erro anterior

**Solução:**
1. Verifique se há erros no console (texto vermelho)
2. Recarregue a página (F5)
3. Tente novamente
4. Se persistir, limpe o cache (Ctrl+Shift+Delete)

---

### Problema 4: Senha Salva Mas Não Funciona no Login
**Sintoma:** Senha foi salva mas aluno não consegue fazer login

**Causa:** Possível problema de sincronização ou cache

**Solução:**
```javascript
// 1. Verificar senha atual
verificarSenhaAluno('email@aluno.com')

// 2. Se senha estiver correta mas login falhar, resetar:
let alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const aluno = alunos.find(a => a.email === 'email@aluno.com');
aluno.senha = 'Sedes'; // ou outra senha
localStorage.setItem('alunos', JSON.stringify(alunos));
console.log('✅ Senha resetada!');

// 3. Tentar login novamente
```

---

### Problema 5: Modal Não Abre
**Sintoma:** Clicar em "Editar" não abre o modal

**Causa:** Erro no JavaScript ou ID inválido

**Solução:**
1. Verifique erros no console
2. Recarregue a página
3. Tente com outro aluno
4. Se persistir, verifique se o aluno existe:
```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
console.table(alunos);
```

---

### Problema 6: Dados Não Salvam
**Sintoma:** Alterações não são salvas

**Causa:** Erro na validação ou problema no localStorage

**Solução:**
1. Verifique se todos os campos obrigatórios estão preenchidos
2. Verifique se o email não está duplicado
3. Teste o localStorage:
```javascript
// Testar se localStorage funciona
localStorage.setItem('teste', 'ok');
console.log(localStorage.getItem('teste')); // Deve mostrar "ok"
localStorage.removeItem('teste');
```

---

## 🧪 Testes Manuais

### Teste 1: Alterar Senha Simples
```
1. Abrir edição de um aluno
2. Campo "Nova Senha": digitar "1234"
3. Clicar no 👁️ para verificar
4. Salvar
5. Verificar no console: verificarSenhaAluno('email@aluno.com')
6. Senha deve ser "1234"
```

### Teste 2: Alterar Senha Complexa
```
1. Abrir edição de um aluno
2. Campo "Nova Senha": digitar "SenhaForte@2026"
3. Clicar no 👁️ para verificar
4. Salvar
5. Verificar no console
6. Senha deve ser "SenhaForte@2026"
```

### Teste 3: Não Alterar Senha
```
1. Abrir edição de um aluno
2. Verificar senha atual: verificarSenhaAluno('email@aluno.com')
3. Deixar campo "Nova Senha" VAZIO
4. Alterar outro campo (ex: nome)
5. Salvar
6. Verificar senha novamente
7. Senha deve ser a MESMA de antes
```

### Teste 4: Senha Muito Curta
```
1. Abrir edição de um aluno
2. Campo "Nova Senha": digitar "123" (3 caracteres)
3. Salvar
4. Deve mostrar erro: "A senha deve ter no mínimo 4 caracteres!"
5. Não deve salvar
```

### Teste 5: Login com Nova Senha
```
1. Alterar senha de um aluno para "TesteSenha123"
2. Fazer logout
3. Tentar login com email do aluno e senha "TesteSenha123"
4. Deve fazer login com sucesso
```

---

## 📋 Checklist de Verificação

Antes de reportar problema, verifique:

- [ ] Console está aberto (F12)
- [ ] Não há erros em vermelho no console
- [ ] Campo de senha foi preenchido
- [ ] Senha tem pelo menos 4 caracteres
- [ ] Clicou em "Salvar Alterações"
- [ ] Aguardou mensagem de sucesso
- [ ] Verificou senha com `verificarSenhaAluno()`
- [ ] Testou login com nova senha
- [ ] Página foi recarregada se necessário
- [ ] Cache foi limpo se necessário

---

## 🛠️ Comandos Úteis

### Verificar Senha de um Aluno
```javascript
verificarSenhaAluno('email@aluno.com')
```

### Listar Todos os Alunos e Senhas
```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
console.table(alunos.map(a => ({
  nome: a.nome,
  email: a.email,
  senha: a.senha,
  ativo: a.ativo
})));
```

### Alterar Senha Manualmente
```javascript
let alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const aluno = alunos.find(a => a.email === 'email@aluno.com');
aluno.senha = 'NovaSenha123';
localStorage.setItem('alunos', JSON.stringify(alunos));
console.log('✅ Senha alterada para:', aluno.senha);
```

### Resetar Todas as Senhas para "Sedes"
```javascript
let alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
alunos.forEach(a => a.senha = 'Sedes');
localStorage.setItem('alunos', JSON.stringify(alunos));
console.log('✅ Todas as senhas resetadas para "Sedes"');
```

### Verificar se Modal Existe
```javascript
const modal = document.getElementById('modalEditarAluno');
console.log('Modal existe?', !!modal);
console.log('Modal visível?', modal.classList.contains('show'));
```

### Verificar se Campo de Senha Existe
```javascript
const campoSenha = document.getElementById('editarSenha');
console.log('Campo existe?', !!campoSenha);
console.log('Valor atual:', campoSenha ? campoSenha.value : 'N/A');
```

---

## 📞 Suporte

Se após seguir todos os passos o problema persistir:

1. **Copie os logs do console:**
   - Clique com botão direito no console
   - "Save as..." ou "Copiar tudo"
   - Envie os logs

2. **Tire screenshots:**
   - Tela de edição com senha preenchida
   - Console com logs
   - Mensagem de erro (se houver)

3. **Informe:**
   - Navegador usado (Chrome, Firefox, Edge, etc)
   - Versão do navegador
   - Sistema operacional
   - Passos exatos que fez

4. **Contato:**
   - 📧 suporte@sedesdf2026.com.br
   - 💬 (61) 99999-9999

---

## ✅ Resumo das Melhorias

**Implementado:**
- ✅ Logs detalhados no console
- ✅ Validação melhorada com trim
- ✅ Botão mostrar/ocultar senha
- ✅ Função de debug `verificarSenhaAluno()`
- ✅ Mensagens de erro específicas
- ✅ Documentação de troubleshooting

**Como Testar:**
1. Abra o console (F12)
2. Edite um aluno
3. Digite nova senha
4. Clique no 👁️ para ver
5. Salve
6. Verifique logs
7. Use `verificarSenhaAluno('email@aluno.com')`
8. Teste login com nova senha

---

**🔧 Troubleshooting - Edição de Senha**

**Data:** 3 de maio de 2026  
**Status:** ✅ MELHORIAS IMPLEMENTADAS

Se o problema persistir após estas melhorias, por favor reporte com os logs do console!
