# ⚡ Comandos Rápidos - SEDES DF 2026

Guia de referência rápida para as operações mais comuns.

---

## 🔐 Admin

### Alterar Senha Admin
```javascript
// No console (F12)
alterarSenhaAdmin('suaNovaSenha123')
```

### Resetar Senha Admin (se esqueceu)
```javascript
// No console (F12)
localStorage.removeItem('adminPasswordHash');
// Recarregue a página (F5)
// Use senha padrão: Hudson*
```

### Ver Hash Atual
```javascript
console.log(localStorage.getItem('adminPasswordHash'));
```

---

## 🤖 Configurar IA (Groq)

### Método 1: Página Dedicada
```
1. Acesse: configurar-chave.html
2. Cole sua chave da Groq
3. Clique em "Salvar e Testar"
```

### Método 2: Console
```javascript
// No console (F12)
localStorage.setItem('groqApiKey', 'sua-chave-aqui');
```

### Método 3: Painel Admin
```
1. Login como admin
2. Configurações → Chave API
3. Cole e salve
```

### Testar Conexão
```javascript
testIAConn();
```

### Ver Chave Atual
```javascript
console.log(localStorage.getItem('groqApiKey'));
```

---

## 📧 Boas-Vindas

### Ver Mensagens Pendentes
```
Acesse: enviar-boas-vindas.html
```

### Via Console
```javascript
const mensagens = JSON.parse(localStorage.getItem('boasVindasPendentes') || '[]');
console.log(mensagens);
```

### Estatísticas
```javascript
const mensagens = JSON.parse(localStorage.getItem('boasVindasPendentes') || '[]');
const enviadas = mensagens.filter(m => m.enviado).length;
const pendentes = mensagens.filter(m => !m.enviado).length;
console.log('✅ Enviadas:', enviadas);
console.log('⏳ Pendentes:', pendentes);
```

---

## 👥 Alunos

### Ver Todos os Alunos
```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
console.table(alunos);
```

### Buscar Aluno por Email
```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const aluno = alunos.find(a => a.email === 'email@exemplo.com');
console.log(aluno);
```

### Contar Alunos
```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
console.log('Total de alunos:', alunos.length);
```

### Alunos Ativos
```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const ativos = alunos.filter(a => a.ativo);
console.log('Alunos ativos:', ativos.length);
```

---

## 💰 Mensalidades

### Ver Todas as Mensalidades
```javascript
const mensalidades = JSON.parse(localStorage.getItem('mensalidades') || '[]');
console.table(mensalidades);
```

### Mensalidades Vencidas
```javascript
const mensalidades = JSON.parse(localStorage.getItem('mensalidades') || '[]');
const vencidas = mensalidades.filter(m => m.status === 'vencido');
console.log('Mensalidades vencidas:', vencidas.length);
console.table(vencidas);
```

### Mensalidades Pendentes
```javascript
const mensalidades = JSON.parse(localStorage.getItem('mensalidades') || '[]');
const pendentes = mensalidades.filter(m => m.status === 'pendente');
console.log('Mensalidades pendentes:', pendentes.length);
```

### Total Recebido
```javascript
const mensalidades = JSON.parse(localStorage.getItem('mensalidades') || '[]');
const pagas = mensalidades.filter(m => m.status === 'pago');
const total = pagas.reduce((sum, m) => sum + m.valor, 0);
console.log('Total recebido: R$', total.toFixed(2));
```

---

## 📹 Vídeos

### Configurar YouTube API Key
```javascript
// Edite o código em index.html
// Procure por: const YOUTUBE_API_KEY
// Substitua por sua chave
```

### Limpar Cache de Vídeos
```javascript
localStorage.removeItem('videosCache');
console.log('✅ Cache limpo!');
```

### Ver Cache Atual
```javascript
const cache = JSON.parse(localStorage.getItem('videosCache') || '{}');
console.log('Vídeos em cache:', Object.keys(cache).length);
console.log(cache);
```

---

## 🗄️ Backup e Restore

### Fazer Backup Completo
```javascript
const backup = {
  alunos: localStorage.getItem('alunos'),
  mensalidades: localStorage.getItem('mensalidades'),
  boasVindas: localStorage.getItem('boasVindasPendentes'),
  groqKey: localStorage.getItem('groqApiKey'),
  adminHash: localStorage.getItem('adminPasswordHash'),
  data: new Date().toISOString()
};

// Copiar para clipboard
copy(JSON.stringify(backup, null, 2));
console.log('✅ Backup copiado! Cole em um arquivo .json');
```

### Restaurar Backup
```javascript
// Cole o JSON do backup na variável abaixo
const backup = {
  // ... seu backup aqui
};

localStorage.setItem('alunos', backup.alunos);
localStorage.setItem('mensalidades', backup.mensalidades);
localStorage.setItem('boasVindasPendentes', backup.boasVindas);
localStorage.setItem('groqApiKey', backup.groqKey);
localStorage.setItem('adminPasswordHash', backup.adminHash);

console.log('✅ Backup restaurado!');
location.reload();
```

---

## 🧹 Limpeza

### Limpar Tudo (CUIDADO!)
```javascript
if(confirm('⚠️ ATENÇÃO: Isso vai apagar TODOS os dados! Tem certeza?')) {
  localStorage.clear();
  console.log('✅ Tudo limpo!');
  location.reload();
}
```

### Limpar Apenas Cache
```javascript
localStorage.removeItem('videosCache');
console.log('✅ Cache limpo!');
```

### Limpar Mensagens Enviadas
```javascript
const mensagens = JSON.parse(localStorage.getItem('boasVindasPendentes') || '[]');
const pendentes = mensagens.filter(m => !m.enviado);
localStorage.setItem('boasVindasPendentes', JSON.stringify(pendentes));
console.log('✅ Mensagens enviadas removidas!');
```

---

## 📊 Estatísticas

### Dashboard Completo
```javascript
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
const mensalidades = JSON.parse(localStorage.getItem('mensalidades') || '[]');
const boasVindas = JSON.parse(localStorage.getItem('boasVindasPendentes') || '[]');

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📊 DASHBOARD SEDES DF 2026');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('👥 Total de alunos:', alunos.length);
console.log('✅ Alunos ativos:', alunos.filter(a => a.ativo).length);
console.log('❌ Alunos inativos:', alunos.filter(a => !a.ativo).length);
console.log('');
console.log('💰 Total de mensalidades:', mensalidades.length);
console.log('✅ Pagas:', mensalidades.filter(m => m.status === 'pago').length);
console.log('⏳ Pendentes:', mensalidades.filter(m => m.status === 'pendente').length);
console.log('❌ Vencidas:', mensalidades.filter(m => m.status === 'vencido').length);
console.log('');
const pagas = mensalidades.filter(m => m.status === 'pago');
const total = pagas.reduce((sum, m) => sum + m.valor, 0);
console.log('💵 Total recebido: R$', total.toFixed(2));
console.log('');
console.log('📧 Mensagens de boas-vindas:', boasVindas.length);
console.log('✅ Enviadas:', boasVindas.filter(m => m.enviado).length);
console.log('⏳ Pendentes:', boasVindas.filter(m => !m.enviado).length);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
```

---

## 🔧 Debug

### Ver Todos os Dados do LocalStorage
```javascript
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🗄️ LOCALSTORAGE COMPLETO');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
for(let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}:`, value.substring(0, 100) + '...');
}
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
```

### Tamanho do LocalStorage
```javascript
let total = 0;
for(let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  total += value.length;
}
console.log('📦 Tamanho total:', (total / 1024).toFixed(2), 'KB');
console.log('📊 Limite:', '5-10 MB (depende do navegador)');
console.log('📈 Uso:', ((total / (5 * 1024 * 1024)) * 100).toFixed(2), '%');
```

### Verificar Integridade dos Dados
```javascript
console.log('🔍 Verificando integridade...');

try {
  const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
  console.log('✅ Alunos: OK (' + alunos.length + ')');
} catch(e) {
  console.log('❌ Alunos: ERRO', e);
}

try {
  const mensalidades = JSON.parse(localStorage.getItem('mensalidades') || '[]');
  console.log('✅ Mensalidades: OK (' + mensalidades.length + ')');
} catch(e) {
  console.log('❌ Mensalidades: ERRO', e);
}

try {
  const boasVindas = JSON.parse(localStorage.getItem('boasVindasPendentes') || '[]');
  console.log('✅ Boas-vindas: OK (' + boasVindas.length + ')');
} catch(e) {
  console.log('❌ Boas-vindas: ERRO', e);
}

console.log('✅ Verificação concluída!');
```

---

## 🚀 Deploy

### Via Wrangler CLI
```bash
# Instalar Wrangler
npm install -g wrangler

# Login no Cloudflare
wrangler login

# Deploy
wrangler pages deploy . --project-name=sedes-12y
```

### Via Git
```bash
# Adicionar mudanças
git add .

# Commit
git commit -m "Atualização do sistema"

# Push
git push origin main
```

---

## 📱 URLs Importantes

### Produção
- **Site:** https://sedes-12y.pages.dev
- **GitHub:** https://github.com/hudsonlima7-web/Sedes

### Páginas
- **Login:** `index.html`
- **Checkout:** `checkout.html`
- **Landing:** `landing.html`
- **Boas-vindas:** `enviar-boas-vindas.html`
- **Configurar IA:** `configurar-chave.html`
- **Testar Vídeos:** `testar-videos.html`

---

## 🆘 Problemas Comuns

### "IA não responde"
```javascript
// Verificar chave
console.log('Chave:', localStorage.getItem('groqApiKey'));

// Testar conexão
testIAConn();

// Reconfigurar
localStorage.setItem('groqApiKey', 'sua-chave-aqui');
```

### "Vídeos não carregam"
```javascript
// Limpar cache
localStorage.removeItem('videosCache');

// Verificar API key no código
// Procure: const YOUTUBE_API_KEY
```

### "Não consigo fazer login"
```javascript
// Ver alunos cadastrados
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
console.table(alunos);

// Resetar senha admin
localStorage.removeItem('adminPasswordHash');
location.reload();
```

### "Mensagens não aparecem"
```javascript
// Ver mensagens
const msgs = JSON.parse(localStorage.getItem('boasVindasPendentes') || '[]');
console.log(msgs);

// Se vazio, faça uma matrícula teste
```

---

## 💡 Dicas

### Abrir Console
- **Windows/Linux:** `F12` ou `Ctrl+Shift+J`
- **Mac:** `Cmd+Option+J`

### Copiar Resultado
```javascript
// Use copy() para copiar para clipboard
copy(JSON.stringify(dados, null, 2));
```

### Recarregar Página
- **Normal:** `F5` ou `Ctrl+R`
- **Hard Reload:** `Ctrl+Shift+R` (limpa cache)

### Modo Desenvolvedor
```javascript
// Ativar logs detalhados
localStorage.setItem('debug', 'true');
```

---

**⚡ Comandos Rápidos - SEDES DF 2026**

**Mantenha este arquivo aberto para referência rápida!**

**Última atualização:** 3 de maio de 2026
