# 📚 Guia do Administrador - SEDES DF 2026

## 🔐 Acesso ao Sistema

**Site:** https://ecc54c87.sedes-12y-2dy.pages.dev

**Credenciais:**
- **Usuário:** `admin`
- **Senha:** `Hudson*`

---

## 🚀 Primeiros Passos

### 1️⃣ Fazer Login
1. Acesse o site
2. Clique em **"🔐 Admin"** no menu lateral
3. Digite usuário e senha
4. Clique em **"🔓 Entrar"**

### 2️⃣ Configurar o Tutor IA
1. Vá em **"⚙️ Configurações"**
2. Na seção **"🤖 Configuração do Tutor IA"**
3. Cole sua chave da API Groq
4. Clique em **"💾 Salvar Chave"**
5. Clique em **"🧪 Testar Conexão"**
6. Se aparecer ✅, está funcionando!
7. **Recarregue a página** para ativar

---

## 👥 Gestão de Alunos

### Cadastrar Novo Aluno
1. Vá em **"👥 Alunos"**
2. Clique em **"+ Adicionar"**
3. Preencha os dados:
   - Nome completo *
   - Email *
   - CPF
   - Telefone
   - Data de matrícula
   - Cargo pretendido
   - Valor da mensalidade
4. Clique em **"💾 Salvar Aluno"**

### Buscar Alunos
- Use a caixa de busca no topo da lista
- Busca por nome ou email

### Ativar/Desativar Aluno
- Clique no botão **"🚫 Desativar"** ou **"✅ Ativar"**
- Alunos inativos não aparecem nas estatísticas

---

## 💰 Controle de Mensalidades

### Dashboard Financeiro
Ao entrar em **"💰 Mensalidades"**, você verá:
- 💵 **Total a Receber** - Mensalidades pendentes
- ✅ **Recebido no Mês** - Já pagos
- ⚠️ **Em Atraso** - Vencidos e não pagos
- 📊 **Taxa de Pagamento** - Percentual de pagos

### Registrar Pagamento
1. Encontre a mensalidade na lista
2. Clique em **"💰 Registrar Pagamento"**
3. O status muda para ✅ Pago automaticamente

### Status das Mensalidades
- ✅ **Pago** (verde) - Mensalidade quitada
- ⏳ **Pendente** (amarelo) - Ainda não venceu
- ⚠️ **Atrasado** (vermelho) - Vencido, mostra dias de atraso

### Vencimento
- Mensalidades vencem automaticamente no **dia 10** de cada mês
- Criadas automaticamente ao cadastrar aluno

---

## 🔑 Controle de Acessos

### Configurações de Bloqueio
1. Vá em **"🔑 Acessos"**
2. Configure:
   - ☑️ **Bloquear inadimplentes automaticamente**
   - ☑️ **Notificar antes do vencimento**
   - **Dias de tolerância** (padrão: 5 dias)

### Como Funciona
- Aluno com mensalidade atrasada > dias de tolerância = **Bloqueado**
- Ao pagar, o acesso é **liberado automaticamente**

### Status de Acesso
- ✅ **Em dia** + ✅ **Liberado** - Pode acessar
- ⚠️ **Inadimplente** + 🚫 **Bloqueado** - Sem acesso

### Bloqueio Manual
- Use o botão **"🚫 Bloquear"** ou **"✅ Liberar"**
- Sobrescreve o bloqueio automático

---

## ⚙️ Configurações do Sistema

### Alterar Senha do Admin
1. Vá em **"⚙️ Configurações"**
2. Seção **"🔐 Segurança"**
3. Digite a nova senha (mínimo 6 caracteres)
4. Confirme a senha
5. Clique em **"🔒 Alterar Senha"**

### Exportar Dados
1. Vá em **"⚙️ Configurações"**
2. Seção **"📊 Dados do Sistema"**
3. Clique em **"📥 Exportar Dados"**
4. Baixa um arquivo JSON com backup completo

### Limpar Dados
⚠️ **CUIDADO!** Apaga TUDO (alunos, mensalidades, etc)
1. Clique em **"🗑️ Limpar Todos os Dados"**
2. Confirme duas vezes
3. Dados são apagados permanentemente

---

## 📊 Estatísticas

### Dashboard Principal (Alunos)
- 📝 **Questões Respondidas**
- ⏱️ **Horas Estudadas**
- 🔥 **Dias Seguidos**
- 📅 **Dias até a prova**

### Dashboard Admin (Configurações)
- **Total de Alunos**
- **Alunos Ativos**
- **Mensalidades Cadastradas**
- **Taxa de Pagamento**

---

## 🎯 Fluxo de Trabalho Recomendado

### Cadastro de Novo Aluno
1. ✅ Cadastrar aluno em **"👥 Alunos"**
2. ✅ Mensalidade criada automaticamente
3. ✅ Aluno pode acessar o sistema
4. ✅ Acompanhar pagamento em **"💰 Mensalidades"**

### Controle Mensal
1. 📅 **Dia 1-9:** Enviar lembretes de vencimento
2. 📅 **Dia 10:** Vencimento das mensalidades
3. 📅 **Dia 11-15:** Período de tolerância (5 dias)
4. 📅 **Dia 16+:** Bloqueio automático de inadimplentes

### Gestão de Inadimplência
1. Ver lista em **"💰 Mensalidades"** (filtrar atrasados)
2. Entrar em contato com aluno
3. Ao receber pagamento: **"💰 Registrar Pagamento"**
4. Acesso liberado automaticamente

---

## 🔒 Segurança

### Boas Práticas
- ✅ Altere a senha padrão regularmente
- ✅ Não compartilhe as credenciais
- ✅ Faça backup dos dados mensalmente
- ✅ Revogue chaves da API se expostas
- ✅ Use HTTPS sempre (já configurado)

### Dados Armazenados
- **LocalStorage** do navegador
- Dados ficam no computador/navegador usado
- Limpar cache = perder dados (faça backup!)

---

## 🆘 Problemas Comuns

### "Tutor IA não funciona"
1. Vá em **"⚙️ Configurações"**
2. Verifique se a chave está salva
3. Clique em **"🧪 Testar Conexão"**
4. Se erro, gere nova chave em https://console.groq.com/

### "Esqueci a senha do admin"
- Edite o arquivo `index.html` linha 1348
- Ou limpe o LocalStorage do navegador

### "Dados sumiram"
- Verifique se está no mesmo navegador
- LocalStorage é por navegador/computador
- Restaure do backup se tiver

### "Aluno não consegue acessar"
1. Verifique em **"🔑 Acessos"**
2. Veja se está inadimplente
3. Libere manualmente se necessário

---

## 📞 Suporte

- **Site:** https://ecc54c87.sedes-12y-2dy.pages.dev
- **GitHub:** https://github.com/hudsonlima7-web/Sedes
- **API Groq:** https://console.groq.com/

---

## 🎓 Recursos para Alunos

Os alunos têm acesso a:
- 📚 **Matérias** do concurso
- ✏️ **Questões** estilo Quadrix
- ▶️ **Videoaulas** do YouTube
- 🤖 **Tutor IA** (se configurado)
- 📅 **Cronograma** personalizado
- 📊 **Progresso** e estatísticas

---

**Última atualização:** Maio 2026  
**Versão:** 1.0 - Sistema Completo
