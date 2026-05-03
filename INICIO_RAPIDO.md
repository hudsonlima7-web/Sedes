# ⚡ Início Rápido - Ativar Tutor IA

## 🆓 API 100% GRATUITA!

O Tutor IA usa **Groq** - totalmente grátis e super rápido!

---

## 📋 Checklist de 3 Passos

### ☐ 1. Obter Chave (2 min)
1. Acesse: **https://console.groq.com/**
2. Crie conta (Google/GitHub)
3. Clique em **"Create API Key"**
4. Copie a chave (começa com `gsk_`)

### ☐ 2. Configurar (1 min)
1. Abra `index.html`
2. Linha 993: cole sua chave
   ```javascript
   const GROQ_API_KEY = 'gsk_sua_chave_aqui';
   ```
3. Salve (Ctrl+S)

### ☐ 3. Deploy (1 min)
```bash
git add index.html
git commit -m "Adicionar chave Groq"
git push
wrangler pages deploy . --project-name=sedes-12y
```

---

## ✅ Pronto!

Acesse: **https://sedes-12y.pages.dev**

Teste o Tutor IA perguntando:
- "Explique o que é SUAS"
- "Crie uma questão sobre LOAS"

---

## 🔗 Links Importantes

- **Obter Chave:** https://console.groq.com/
- **Seu Site:** https://sedes-12y.pages.dev
- **Guia Completo:** Leia `CONFIGURAR_IA.md`

---

**Total: 4 minutos para ter IA funcionando!** ⚡
