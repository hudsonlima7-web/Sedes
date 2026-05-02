# 🤖 Como Configurar o Tutor IA (100% GRATUITO!)

## 🆓 API Groq - Totalmente Gratuita!

O Tutor IA agora usa a **API Groq** que é:
- ✅ **100% GRATUITA** - Sem custos!
- ⚡ **Super Rápida** - Respostas em 1-2 segundos
- 🧠 **Llama 3.1 70B** - Modelo de alta qualidade
- 🔒 **Limite Generoso** - 30 requisições/minuto grátis
- 🌐 **Sem cartão de crédito** - Só criar conta!

---

## ✅ Configuração em 3 Passos Simples

### 📝 Passo 1: Obter a Chave da API (2 minutos)

1. **Acesse:** https://console.groq.com/
2. **Crie uma conta:**
   - Pode usar Google, GitHub ou email
   - Não precisa de cartão de crédito!
3. **Vá em "API Keys"** no menu lateral
4. **Clique em "Create API Key"**
5. **Dê um nome** (ex: "SEDES DF 2026")
6. **Copie a chave** (começa com `gsk_...`)
   - ⚠️ Guarde em local seguro!
   - ⚠️ Não compartilhe com ninguém!

### 🔧 Passo 2: Adicionar a Chave no Código (1 minuto)

1. **Abra o arquivo `index.html`** no seu editor de código
2. **Procure pela linha 993** ou busque por: `GROQ_API_KEY`
3. **Você verá isso:**
   ```javascript
   const GROQ_API_KEY = 'sua_chave_aqui';
   ```
4. **Substitua por:**
   ```javascript
   const GROQ_API_KEY = 'gsk_SUA_CHAVE_REAL_AQUI';
   ```
5. **Salve o arquivo** (Ctrl+S)

### 🚀 Passo 3: Fazer Deploy (1 minuto)

Abra o terminal na pasta do projeto e execute:

```bash
# Adicionar as mudanças
git add index.html

# Fazer commit
git commit -m "Adicionar chave da API Groq"

# Enviar para o GitHub
git push

# Fazer deploy no Cloudflare
wrangler pages deploy . --project-name=sedes-12y
```

---

## ✨ Pronto! Teste Agora

Acesse seu site e teste o Tutor IA:
**https://sedes-12y.pages.dev**

Pergunte algo como:
- "Explique o que é SUAS"
- "Crie uma questão sobre LOAS"
- "Quais são os principais temas da prova?"

---

## 🆚 Comparação: Groq vs Anthropic

| Característica | Groq (Atual) | Anthropic (Anterior) |
|---------------|--------------|----------------------|
| **Custo** | 🆓 Gratuito | 💰 Pago |
| **Velocidade** | ⚡ 1-2s | 🐌 3-5s |
| **Modelo** | Llama 3.1 70B | Claude Sonnet |
| **Limite** | 30 req/min | Depende do plano |
| **Cartão** | ❌ Não precisa | ✅ Necessário |
| **Qualidade** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🔒 Segurança

### ⚠️ Avisos Importantes

- Sua chave ficará **visível no código-fonte** do site
- Qualquer pessoa pode **ver** sua chave
- Configure **rate limiting** na console do Groq
- Monitore o uso regularmente

### 🛡️ Proteção Recomendada

**Para uso pessoal:**
1. ✅ Use a chave diretamente (como configurado)
2. ✅ Monitore o uso na console do Groq
3. ✅ Revogue a chave se notar uso suspeito
4. ✅ Groq tem limite de 30 req/min (proteção automática)

**Para uso público (muitos usuários):**
Você precisaria criar um backend para proteger a chave:
- Node.js + Express
- Cloudflare Workers
- Vercel Serverless Functions

---

## 🆘 Problemas Comuns

### "401 Unauthorized"
- ❌ Chave inválida ou expirada
- ✅ Verifique se copiou corretamente (começa com `gsk_`)
- ✅ Gere uma nova chave na console

### "429 Too Many Requests"
- ❌ Limite de 30 requisições/minuto atingido
- ✅ Aguarde 1 minuto
- ✅ Reduza a frequência de uso

### "Tutor IA offline"
- ❌ Sem conexão com internet
- ❌ Chave não configurada
- ✅ Abra o Console do navegador (F12) para ver erros detalhados

### Resposta muito lenta
- ⚡ Groq é normalmente muito rápido (1-2s)
- ✅ Verifique sua conexão com internet
- ✅ Tente novamente

---

## 🎯 Alternativas Gratuitas

Se quiser testar outras APIs gratuitas:

### 1. **Google Gemini** (Gratuito)
- API: `https://ai.google.dev/`
- Modelo: Gemini 1.5 Flash
- Limite: 15 req/min grátis

### 2. **Hugging Face** (Gratuito)
- API: `https://huggingface.co/inference-api`
- Modelos: Vários open source
- Limite: Variável

### 3. **OpenRouter** (Freemium)
- API: `https://openrouter.ai/`
- Modelos: Vários (alguns grátis)
- Limite: Depende do modelo

---

## 📞 Links Úteis

- **Groq Console:** https://console.groq.com/
- **Documentação:** https://console.groq.com/docs
- **Modelos Disponíveis:** https://console.groq.com/docs/models
- **Seu Site:** https://sedes-12y.pages.dev

---

## 💡 Dicas de Uso

1. **Seja específico** nas perguntas
2. **Peça exemplos** de questões
3. **Solicite explicações** detalhadas
4. **Use para revisar** conteúdos
5. **Crie simulados** personalizados

### Exemplos de Prompts:

```
"Crie 5 questões estilo Quadrix sobre LOAS"

"Explique a diferença entre CRAS e CREAS"

"Quais são os artigos mais cobrados da CF/88 sobre assistência social?"

"Faça um resumo da NOB-SUAS 2012"

"Crie um plano de estudos de 30 dias para Especialista"
```

---

**Boa sorte nos estudos! 🎓**

*Tutor IA configurado com Groq - 100% Gratuito e Super Rápido!* ⚡
