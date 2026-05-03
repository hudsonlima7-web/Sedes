# ⚡ COMANDOS RÁPIDOS - SEDES DF 2026

## ✅ O QUE FOI FEITO AGORA

Abri automaticamente todas as páginas necessárias:

1. ✅ **LIMPAR-CACHE.html** - Para limpar cache do navegador
2. ✅ **DIAGNOSTICO.html** - Para criar aluno teste
3. ✅ **index.html** - Sistema principal (login)
4. ✅ **checkout.html** - Página de cadastro
5. ✅ **INSTRUCOES-AGORA.html** - Instruções visuais passo a passo

---

## 📋 SIGA ESTAS ETAPAS (EM ORDEM)

### 1️⃣ Na aba: LIMPAR-CACHE.html
```
Clique em: "🔄 Limpar Cache Agora"
Aguarde: 3 segundos (recarrega automaticamente)
```

### 2️⃣ Na aba: DIAGNOSTICO.html
```
Clique em: "➕ Criar Aluno Teste"
Aguarde: Confirmação
Resultado: Aluno teste criado
```

### 3️⃣ Na aba: index.html
```
Digite:
  Email: teste@sedes.com
  Senha: Sedes
Clique em: "Entrar"
Pressione: F12 (para ver logs)
```

### 4️⃣ (Opcional) Na aba: checkout.html
```
Preencha os dados
Senha padrão: "Sedes" (já vem preenchida)
Clique no 👁️ para ver a senha
Finalize o cadastro
```

---

## 🔑 CREDENCIAIS DO ALUNO TESTE

```
📧 Email: teste@sedes.com
🔐 Senha: Sedes
```

---

## 🔍 VER LOGS DETALHADOS

```
Pressione: F12
Aba: Console
Veja: Todos os logs detalhados
```

**Logs que você verá:**
- 🔐 Tentativa de login
- 📧 Email digitado
- 🔐 Senha digitada
- 📊 Total de alunos cadastrados
- 👥 Lista de alunos
- ✅ Aluno encontrado
- ✅ Acesso liberado

---

## 🐛 SE NÃO FUNCIONAR

### Opção 1: Ver Logs
```
1. Pressione F12
2. Aba Console
3. Copie TODOS os logs (Ctrl + A, Ctrl + C)
4. Me envie
```

### Opção 2: Limpar Tudo
```
1. Abra DIAGNOSTICO.html
2. Clique em "🗑️ Limpar Tudo"
3. Confirme
4. Clique em "➕ Criar Aluno Teste"
5. Teste novamente
```

### Opção 3: Comandos no Console (F12)
```javascript
// Ver todos os alunos
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
console.table(alunos);

// Ver aluno específico
const aluno = alunos.find(a => a.email === 'teste@sedes.com');
console.log('Email:', aluno.email);
console.log('Senha:', aluno.senha);

// Limpar tudo
localStorage.clear();
location.reload();
```

---

## 📁 ARQUIVOS ABERTOS

| Arquivo | Função | Status |
|---------|--------|--------|
| LIMPAR-CACHE.html | Limpar cache | ✅ Aberto |
| DIAGNOSTICO.html | Criar aluno teste | ✅ Aberto |
| index.html | Sistema principal | ✅ Aberto |
| checkout.html | Cadastro de alunos | ✅ Aberto |
| INSTRUCOES-AGORA.html | Instruções visuais | ✅ Aberto |

---

## 🎯 RESULTADO ESPERADO

Após seguir os passos:
1. ✅ Cache limpo
2. ✅ Aluno teste criado
3. ✅ Login funcionando
4. ✅ Sistema acessível
5. ✅ Logs detalhados visíveis

---

## 📞 PRECISA DE AJUDA?

**Se ainda não funcionar:**
1. Abra o console (F12)
2. Copie TODOS os logs
3. Tire um print da tela
4. Me envie

**Com os logs, consigo identificar EXATAMENTE o problema!**

---

## 🚀 ATALHOS ÚTEIS

| Ação | Atalho |
|------|--------|
| Abrir Console | F12 |
| Recarregar Forçado | Ctrl + Shift + R |
| Limpar Cache | Ctrl + Shift + Delete |
| Copiar Tudo | Ctrl + A, Ctrl + C |

---

## ✅ CHECKLIST RÁPIDO

- [ ] Limpei o cache (LIMPAR-CACHE.html)?
- [ ] Criei aluno teste (DIAGNOSTICO.html)?
- [ ] Tentei fazer login (index.html)?
- [ ] Pressionei F12 para ver logs?
- [ ] Vi os logs detalhados no console?
- [ ] Copiei os logs se houver erro?

---

**Última Atualização:** 03/05/2026  
**Commit:** `5e8a02a` - "feat: adiciona página de instruções visuais passo a passo"  
**Status:** ✅ TUDO ABERTO E PRONTO PARA USO

**🎯 PRÓXIMO PASSO:** Siga as instruções na aba INSTRUCOES-AGORA.html
