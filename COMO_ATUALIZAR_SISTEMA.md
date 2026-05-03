# 🔄 Como Atualizar o Sistema no Navegador

## ⚠️ Problema: Alterações Não Aparecem

Se você fez um `git pull` ou atualizou os arquivos mas as mudanças não aparecem no navegador, o problema é **cache do navegador**.

---

## ✅ Solução: Limpar Cache e Forçar Atualização

### Método 1: Hard Refresh (Mais Rápido) ⚡

**Windows/Linux:**
```
Ctrl + Shift + R
ou
Ctrl + F5
```

**Mac:**
```
Cmd + Shift + R
```

Isso força o navegador a recarregar todos os arquivos sem usar cache.

---

### Método 2: Limpar Cache Completo 🧹

**Chrome/Edge:**
1. Pressione `Ctrl + Shift + Delete`
2. Selecione "Imagens e arquivos em cache"
3. Período: "Todo o período"
4. Clique em "Limpar dados"
5. Recarregue a página (F5)

**Firefox:**
1. Pressione `Ctrl + Shift + Delete`
2. Selecione "Cache"
3. Período: "Tudo"
4. Clique em "Limpar agora"
5. Recarregue a página (F5)

---

### Método 3: Modo Anônimo/Privado 🕵️

**Chrome/Edge:**
```
Ctrl + Shift + N
```

**Firefox:**
```
Ctrl + Shift + P
```

Abra o site no modo anônimo - ele não usa cache.

---

### Método 4: DevTools (Desenvolvedor) 🛠️

1. Pressione `F12` (abrir DevTools)
2. Clique com botão direito no ícone de recarregar
3. Selecione "Esvaziar cache e atualizar forçadamente"

---

## 🔍 Como Verificar se Atualizou

### 1. Verificar Versão do Arquivo

Abra o console (F12) e digite:
```javascript
// Verificar se função existe
console.log(typeof toggleSenhaVisivel);
// Deve mostrar: "function"

// Verificar se botão existe
console.log(document.querySelector('button[onclick*="toggleSenhaVisivel"]'));
// Deve mostrar: <button...>
```

### 2. Verificar Visualmente

1. Acesse "Lista de Alunos"
2. Clique em "✏️ Editar" em um aluno
3. Procure o campo "Nova Senha"
4. **Deve ter um botão 👁️ ao lado**
5. Se não tiver, o cache não foi limpo

### 3. Verificar Logs

1. Abra o console (F12)
2. Edite um aluno e altere a senha
3. Clique em "Salvar"
4. **Deve aparecer logs detalhados:**
```
🔍 Verificando senha: {...}
✅ Senha alterada para: ...
💾 Dados salvos no localStorage
```

Se não aparecer, o cache não foi limpo.

---

## 🚀 Passo a Passo Completo

### Para Atualizar o Sistema:

**1. Atualizar Código (Git)**
```bash
git pull origin master
```

**2. Limpar Cache do Navegador**
```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

**3. Verificar Atualização**
```javascript
// No console (F12)
console.log(typeof toggleSenhaVisivel);
// Deve mostrar: "function"
```

**4. Testar Funcionalidade**
```
1. Editar aluno
2. Ver botão 👁️ no campo senha
3. Alterar senha
4. Ver logs no console
5. Verificar se salvou
```

---

## 🌐 Para Deploy em Produção

### Cloudflare Pages

**Opção 1: Deploy Automático (GitHub)**
```
1. Faça push para GitHub
2. Cloudflare detecta automaticamente
3. Faz deploy em ~2 minutos
4. Acesse: https://sedes-12y.pages.dev
```

**Opção 2: Deploy Manual (Wrangler)**
```bash
wrangler pages deploy . --project-name=sedes-12y
```

**Opção 3: Dashboard Cloudflare**
```
1. Acesse dash.cloudflare.com
2. Pages → sedes-12y
3. Deployments → Retry deployment
4. Ou: Create deployment → Upload files
```

### Após Deploy

**Limpar Cache do Site:**
```
1. Acesse o site: https://sedes-12y.pages.dev
2. Pressione Ctrl + Shift + R
3. Ou abra em modo anônimo
```

**Verificar Versão:**
```javascript
// No console do site em produção
console.log(typeof toggleSenhaVisivel);
```

---

## 🐛 Problemas Comuns

### "Função não existe"

**Causa:** Cache não foi limpo

**Solução:**
1. Ctrl + Shift + Delete
2. Limpar cache
3. Recarregar página
4. Ou abrir em modo anônimo

---

### "Botão 👁️ não aparece"

**Causa:** HTML antigo em cache

**Solução:**
1. Hard refresh: Ctrl + Shift + R
2. Se não funcionar: limpar cache completo
3. Verificar no código-fonte (Ctrl + U)

---

### "Logs não aparecem"

**Causa:** JavaScript antigo em cache

**Solução:**
1. F12 → Network → Disable cache (marcar)
2. Recarregar página
3. Verificar se arquivo index.html foi recarregado

---

### "Deploy não atualiza"

**Causa:** Cloudflare ainda não processou

**Solução:**
1. Aguardar 2-5 minutos
2. Verificar status do deploy no dashboard
3. Forçar novo deploy se necessário
4. Limpar cache do navegador

---

## 📋 Checklist de Atualização

Antes de testar, verifique:

- [ ] Git pull feito
- [ ] Cache do navegador limpo (Ctrl + Shift + R)
- [ ] Console aberto (F12)
- [ ] Função existe: `typeof toggleSenhaVisivel === "function"`
- [ ] Botão 👁️ aparece no campo senha
- [ ] Logs aparecem ao salvar
- [ ] Senha é salva corretamente
- [ ] Login funciona com nova senha

---

## 💡 Dicas

### Durante Desenvolvimento

**Desabilitar Cache:**
1. F12 (DevTools)
2. Network → Disable cache (marcar)
3. Manter DevTools aberto
4. Agora sempre recarrega sem cache

### Para Testar

**Sempre use Hard Refresh:**
```
Ctrl + Shift + R
```

**Ou modo anônimo:**
```
Ctrl + Shift + N
```

### Para Produção

**Após cada deploy:**
1. Aguardar 2 minutos
2. Abrir em modo anônimo
3. Testar funcionalidades
4. Orientar usuários a limpar cache

---

## 🎯 Resumo

**Problema:** Alterações não aparecem  
**Causa:** Cache do navegador  
**Solução:** Ctrl + Shift + R (Hard Refresh)

**Verificação:**
```javascript
// Console (F12)
console.log(typeof toggleSenhaVisivel);
// Deve mostrar: "function"
```

**Se não funcionar:**
1. Limpar cache completo (Ctrl + Shift + Delete)
2. Abrir em modo anônimo (Ctrl + Shift + N)
3. Verificar código-fonte (Ctrl + U)

---

## 📞 Suporte

Se após limpar cache o problema persistir:

1. Verifique se o git pull foi feito
2. Verifique se o arquivo foi modificado (git log)
3. Verifique o código-fonte (Ctrl + U)
4. Tire screenshot do console
5. Entre em contato

---

**🔄 Como Atualizar o Sistema no Navegador**

**Data:** 3 de maio de 2026  
**Solução:** Ctrl + Shift + R (Hard Refresh)

**Sempre limpe o cache após atualizar o código!** 🧹
