# 🎯 SEDES DF 2026 - Plataforma de Estudos

Plataforma inteligente de estudos para o concurso SEDES DF 2026 - Banca Instituto Quadrix

## 🚀 Como Usar

### Acesso Online
Seu site está disponível em: **https://bb41ae37.sedes-12y-2dy.pages.dev**

### 🤖 Configurar o Tutor IA

O Tutor IA usa a API da Anthropic (Claude). Para ativá-lo:

#### Passo 1: Obter a Chave da API
1. Acesse: https://console.anthropic.com/
2. Crie uma conta ou faça login
3. Vá em **"API Keys"**
4. Clique em **"Create Key"**
5. Copie a chave gerada (começa com `sk-ant-...`)

#### Passo 2: Configurar no Código
1. Abra o arquivo `index.html`
2. Procure pela linha **993** (ou busque por `ANTHROPIC_API_KEY`)
3. Substitua `'sua_chave_aqui'` pela sua chave real:
   ```javascript
   const ANTHROPIC_API_KEY = 'sk-ant-api03-...'; // Sua chave aqui
   ```
4. Salve o arquivo

#### Passo 3: Fazer Deploy
```bash
wrangler pages deploy . --project-name=sedes-12y
```

### ⚠️ Segurança da Chave

**IMPORTANTE:** 
- ⚠️ Sua chave ficará visível no código-fonte do site
- ⚠️ Qualquer pessoa pode ver e usar sua chave
- ⚠️ Isso pode gerar custos na sua conta Anthropic

**Recomendações:**
1. Use apenas para testes pessoais
2. Configure limites de uso na console da Anthropic
3. Para produção, considere criar um backend para proteger a chave

## 📁 Estrutura do Projeto

```
Sedes/
├── index.html          # Aplicação principal
├── .env               # Arquivo de configuração (não usado no frontend)
├── README.md          # Este arquivo
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
- 🤖 Tutor IA (requer configuração)

## 🛠️ Tecnologias

- HTML5 + CSS3 + JavaScript
- Cloudflare Pages (hospedagem)
- Anthropic Claude API (Tutor IA)
- LocalStorage (sincronização de dados)

## 📞 Suporte

Para problemas com:
- **Hospedagem:** Cloudflare Pages Dashboard
- **API do Tutor:** https://console.anthropic.com/
- **Git/Deploy:** Verifique os comandos acima

---

**Desenvolvido para SEDES DF 2026** 🎓
