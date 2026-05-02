# 🎯 SEDES DF 2026 - Plataforma de Estudos

Plataforma inteligente de estudos para o concurso SEDES DF 2026 - Banca Instituto Quadrix

## 🚀 Como Usar

### Acesso Online
Seu site está disponível em: **https://bb41ae37.sedes-12y-2dy.pages.dev**

### 🤖 Configurar o Tutor IA (100% GRATUITO!)

O Tutor IA usa a **API Groq** que é **TOTALMENTE GRATUITA** e muito rápida!

#### Passo 1: Obter a Chave da API (Grátis!)
1. Acesse: **https://console.groq.com/**
2. Crie uma conta (pode usar Google/GitHub)
3. Vá em **"API Keys"**
4. Clique em **"Create API Key"**
5. Copie a chave gerada (começa com `gsk_...`)

#### Passo 2: Configurar no Código
1. Abra o arquivo `index.html`
2. Procure pela linha **993** (ou busque por `GROQ_API_KEY`)
3. Substitua `'sua_chave_aqui'` pela sua chave real:
   ```javascript
   const GROQ_API_KEY = 'gsk_...'; // Sua chave aqui
   ```
4. Salve o arquivo

#### Passo 3: Fazer Deploy
```bash
git add index.html
git commit -m "Adicionar chave da API Groq"
git push
wrangler pages deploy . --project-name=sedes-12y
```

### ✨ Por que Groq?

- ✅ **100% Gratuito** - Sem custos!
- ⚡ **Super Rápido** - Respostas em segundos
- 🧠 **Modelo Llama 3.1 70B** - Qualidade excelente
- 🔒 **Limite Generoso** - 30 requisições/minuto grátis

## 📁 Estrutura do Projeto

```
Sedes/
├── index.html          # Aplicação principal
├── .env               # Arquivo de configuração
├── README.md          # Este arquivo
├── CONFIGURAR_IA.md   # Guia detalhado do Tutor IA
└── .git/              # Controle de versão
```

## 🔄 Atualizar o Site

Sempre que fizer alterações:

```bash
git add .
git commit -m "descrição das mudanças"
git push
wrangler pages deploy . --project-name=sedes-12y
```

## 📊 Funcionalidades

- ✅ Dashboard personalizado
- ✅ Cronograma de estudos
- ✅ Banco de questões
- ✅ Videoaulas do YouTube
- ✅ Análise da banca Quadrix
- ✅ Comparativo de cargos
- 🤖 Tutor IA **GRATUITO** (requer configuração)

## 🛠️ Tecnologias

- HTML5 + CSS3 + JavaScript
- Cloudflare Pages (hospedagem)
- **Groq API** (Tutor IA - GRATUITO!)
- LocalStorage (sincronização de dados)

## 📞 Suporte

Para problemas com:
- **Hospedagem:** Cloudflare Pages Dashboard
- **API do Tutor:** https://console.groq.com/
- **Git/Deploy:** Verifique os comandos acima

---

**Desenvolvido para SEDES DF 2026** 🎓
