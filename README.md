# 🎯 SEDES DF 2026 - Plataforma de Estudos

Plataforma inteligente de estudos para o concurso SEDES DF 2026, com Tutor IA, questões, videoaulas e cronograma personalizado.

## 🚀 Acesso Rápido

**Plataforma Online**: https://c64e158b.sedes-12y-2dy.pages.dev

**Login Demo**:
- E-mail: `aluno@teste.com`
- Senha: `123456`

**Admin**:
- Usuário: `admin`
- Senha: `Hudson*`

---

## ⚡ Configuração Rápida do Tutor IA (2 minutos)

### Método 1: Página de Configuração (MAIS FÁCIL)

1. Abra o arquivo `configurar-chave.html` no navegador
2. Siga as 3 etapas na tela
3. Pronto! O Tutor IA já funciona

### Método 2: Via Console do Navegador

1. Obtenha sua chave em: https://console.groq.com/
2. Abra a plataforma e pressione **F12**
3. Cole no console:
   ```javascript
   localStorage.setItem('groqApiKey', 'SUA_CHAVE_AQUI');
   ```
4. Recarregue a página (**F5**)

### Método 3: Via Painel Admin

1. Faça login como admin
2. Vá em **Admin → Configurações**
3. Cole sua chave e clique em **"Salvar"**
4. Clique em **"Testar Conexão"**

---

## 📚 Documentação

- **CONFIGURAR_IA.md** - Guia completo do Tutor IA
- **SISTEMA_LOGIN.md** - Sistema de login e autenticação
- **GUIA_ADMIN.md** - Painel administrativo
- **RESOLVER_ERRO_IA.md** - Troubleshooting do Tutor IA
- **COMO_ATIVAR_IA.md** - Guia rápido de 3 minutos

---

## 🎓 Funcionalidades

### Para Alunos:
- ✅ **Login obrigatório** com verificação de pagamento
- ✅ **Tutor IA** especializado em SEDES DF 2026
- ✅ **1.000+ questões** estilo Quadrix
- ✅ **Videoaulas** atualizadas do YouTube
- ✅ **Cronograma** personalizado
- ✅ **Dashboard** com estatísticas
- ✅ **Simulados** e revisões
- ✅ **Sincronização** entre dispositivos

### Para Administradores:
- ✅ **Gestão de alunos** (CRUD completo)
- ✅ **Controle de mensalidades** (vencimento dia 10)
- ✅ **Bloqueio automático** de inadimplentes
- ✅ **Configuração da API** do Tutor IA
- ✅ **Relatórios** e estatísticas
- ✅ **Exportação** de dados

---

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **IA**: Groq API (Llama 3.3 70B)
- **Storage**: localStorage (client-side)
- **Deploy**: Cloudflare Pages
- **Versionamento**: Git + GitHub

---

## 📦 Estrutura do Projeto

```
Sedes/
├── index.html              # Aplicação principal
├── landing.html            # Página de vendas
├── checkout.html           # Página de pagamento
├── configurar-chave.html   # Configuração do Tutor IA
├── tutor-ia-fix.js         # Sistema de debug da IA
├── CONFIGURAR_IA.md        # Guia do Tutor IA
├── SISTEMA_LOGIN.md        # Guia do sistema de login
├── GUIA_ADMIN.md           # Guia administrativo
├── RESOLVER_ERRO_IA.md     # Troubleshooting
├── COMO_ATIVAR_IA.md       # Guia rápido
└── README.md               # Este arquivo
```

---

## 🔐 Segurança

- ✅ Chaves de API armazenadas apenas no localStorage
- ✅ Senhas não criptografadas (demo - use backend em produção)
- ✅ Validação de e-mail e CPF
- ✅ Controle de acesso por perfil
- ✅ Bloqueio automático de inadimplentes

**⚠️ IMPORTANTE**: Este é um sistema de demonstração. Para produção, implemente:
- Backend seguro (Node.js, Python, etc.)
- Banco de dados (PostgreSQL, MongoDB, etc.)
- Criptografia de senhas (bcrypt)
- Autenticação JWT
- HTTPS obrigatório

---

## 🚀 Deploy

### Cloudflare Pages (Atual)

```bash
wrangler pages deploy . --project-name=sedes-12y
```

### Outros Serviços

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Push para branch `gh-pages`

---

## 🐛 Problemas Comuns

### Tutor IA não funciona

1. Verifique se a chave está configurada:
   ```javascript
   localStorage.getItem('groqApiKey')
   ```

2. Teste a chave manualmente (veja `RESOLVER_ERRO_IA.md`)

3. Use o arquivo `configurar-chave.html`

### Login não funciona

1. Use as credenciais demo: `aluno@teste.com` / `123456`
2. Ou crie uma conta em `checkout.html`
3. Verifique se o localStorage não está bloqueado

### Dados perdidos

- Os dados ficam no localStorage do navegador
- Se limpar o cache, os dados são perdidos
- Para produção, use banco de dados

---

## 📞 Suporte

- **GitHub**: https://github.com/hudsonlima7-web/Sedes
- **Issues**: https://github.com/hudsonlima7-web/Sedes/issues
- **Groq API**: https://console.groq.com/

---

## 📄 Licença

Este projeto é de uso educacional e demonstrativo.

---

## 🎯 Roadmap

- [ ] Backend com Node.js + Express
- [ ] Banco de dados PostgreSQL
- [ ] Autenticação JWT
- [ ] Pagamento real (Stripe/PagSeguro)
- [ ] E-mail automático (SendGrid)
- [ ] PWA (Progressive Web App)
- [ ] App mobile (React Native)
- [ ] Gamificação e rankings
- [ ] Certificados de conclusão

---

**Desenvolvido com ❤️ para os concurseiros do SEDES DF 2026**

**Bons estudos! 🚀**
