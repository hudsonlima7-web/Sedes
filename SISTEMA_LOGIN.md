# 🔐 Sistema de Login - SEDES DF 2026

## 📋 Visão Geral

O sistema agora possui **login obrigatório** antes de acessar qualquer conteúdo da plataforma. Existem dois tipos de acesso:

1. **Login de Aluno** - Para estudantes que compraram um plano
2. **Login Administrativo** - Para gerenciar alunos e mensalidades

---

## 👨‍🎓 Login de Aluno

### Como Funciona

1. Ao abrir `index.html`, a primeira tela é o **login de aluno**
2. O aluno precisa inserir **e-mail** e **senha**
3. Sistema verifica:
   - ✅ Se o aluno existe no banco de dados
   - ✅ Se a senha está correta
   - ✅ Se o pagamento está em dia (mensalidade)
4. Se tudo estiver OK, o aluno acessa a plataforma

### Credenciais de Teste

Para testar o sistema, use:

```
E-mail: aluno@teste.com
Senha: 123456
```

Este aluno demo é criado automaticamente na primeira vez que você abre a plataforma.

### Criar Nova Conta

1. Na tela de login, clique em **"Ainda não tem conta? Conheça nossos planos"**
2. Você será redirecionado para `landing.html`
3. Escolha um plano e clique em **"Começar Agora"**
4. Preencha o formulário em `checkout.html` com:
   - Nome completo
   - E-mail
   - **Senha** (mínimo 6 caracteres)
   - CPF
   - Telefone
   - Dados do cartão (simulado)
5. Após finalizar, você será automaticamente logado

### Bloqueio por Inadimplência

- Se o aluno tiver mensalidade vencida, o acesso é **bloqueado**
- Mensagem exibida: *"🚫 Acesso bloqueado - Mensalidade em atraso"*
- O admin pode desativar esse bloqueio no painel administrativo

### Logout

- No menu lateral (sidebar), clique em **"🚪 Sair"**
- Você será deslogado e voltará para a tela de login

---

## 🔐 Login Administrativo

### Como Acessar

1. Na tela de login de aluno, clique em **"🔐 Acesso Administrativo"**
2. Ou acesse diretamente pelo menu lateral após estar logado

### Credenciais Admin

```
Usuário: admin
Senha: Hudson*
```

### Funcionalidades Admin

Após fazer login como admin, você tem acesso a:

- **👥 Alunos** - Cadastrar, editar, ativar/desativar alunos
- **💰 Mensalidades** - Gerenciar pagamentos mensais
- **🔑 Acessos** - Ver quem está com acesso bloqueado
- **⚙️ Configurações** - Configurar bloqueio automático, API keys, etc.

---

## 🔄 Fluxo Completo

```
1. Usuário abre index.html
   ↓
2. Sistema verifica se está logado
   ↓
3. NÃO LOGADO → Mostra tela de login
   ↓
4. Usuário faz login
   ↓
5. Sistema verifica pagamento
   ↓
6. PAGAMENTO OK → Verifica se tem perfil configurado
   ↓
7. SEM PERFIL → Mostra onboarding (escolher cargo/especialidade)
   ↓
8. COM PERFIL → Vai direto para o dashboard
```

---

## 💾 Dados Armazenados

Todos os dados são salvos no **localStorage** do navegador:

### `alunoLogado`
```json
{
  "id": 1234567890,
  "nome": "João Silva",
  "email": "joao@email.com",
  "plano": "pro",
  "loginAt": "2026-05-02T10:30:00.000Z"
}
```

### `alunos[]`
```json
[
  {
    "id": 1234567890,
    "nome": "João Silva",
    "email": "joao@email.com",
    "senha": "senha123",
    "telefone": "(61) 99999-9999",
    "plano": "pro",
    "dataCadastro": "2026-05-02T10:30:00.000Z",
    "ativo": true
  }
]
```

### `mensalidades[]`
```json
[
  {
    "id": 1234567890,
    "alunoId": 1234567890,
    "valor": 197,
    "vencimento": "2026-06-10",
    "status": "pago",
    "dataPagamento": "2026-05-02"
  }
]
```

---

## 🛠️ Funções Principais

### `alunoLogin(event)`
Faz login do aluno verificando e-mail, senha e status de pagamento.

### `verificarAcessoAluno(alunoId)`
Verifica se o aluno tem mensalidades vencidas e não pagas.

### `alunoLogout()`
Desloga o aluno e recarrega a página.

### `mostrarLoginAdmin(event)`
Redireciona para a tela de login administrativo.

---

## 🎨 Personalização

### Alterar Senha Admin

1. Faça login como admin
2. Vá em **⚙️ Configurações**
3. Altere a senha no campo apropriado
4. A nova senha é salva no localStorage

### Desativar Bloqueio por Inadimplência

1. Login como admin
2. Vá em **🔑 Acessos**
3. Desmarque **"Bloquear inadimplentes automaticamente"**
4. Salve as configurações

---

## 🚀 Deploy

Ao fazer deploy no Cloudflare Pages:

1. Certifique-se de que `index.html`, `landing.html` e `checkout.html` estão no mesmo diretório
2. O sistema funciona 100% no frontend (sem backend necessário)
3. Dados são salvos localmente no navegador de cada usuário

---

## ⚠️ Importante

- **Segurança**: Este sistema é para demonstração. Em produção, use backend seguro com criptografia de senhas.
- **Dados**: Os dados ficam salvos no navegador. Se limpar o cache, os dados são perdidos.
- **Sincronização**: Não há sincronização entre dispositivos (cada navegador tem seus próprios dados).

---

## 📞 Suporte

Se tiver dúvidas sobre o sistema de login, consulte:
- `CONFIGURAR_IA.md` - Configuração da IA
- `GUIA_ADMIN.md` - Guia completo do painel administrativo
- `INICIO_RAPIDO.md` - Guia de início rápido
