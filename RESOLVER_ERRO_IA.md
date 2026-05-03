# 🔧 Como Resolver Erros do Tutor IA

## 🎯 Diagnóstico Rápido

Siga estes passos para identificar e resolver o problema:

---

## PASSO 1: Verificar se a Chave Está Configurada

### Abra o Console do Navegador:
1. Pressione **F12** (ou Ctrl+Shift+I)
2. Vá na aba **"Console"**
3. Digite:
   ```javascript
   localStorage.getItem('groqApiKey')
   ```
4. Pressione **Enter**

### Resultados:

✅ **Se aparecer uma chave (começa com `gsk_`)**:
- A chave está configurada!
- Vá para o PASSO 2

❌ **Se aparecer `null` ou `"sua_chave_aqui"`**:
- A chave NÃO está configurada
- **SOLUÇÃO**: Configure a chave seguindo o PASSO 5

---

## PASSO 2: Testar a Chave

No console, digite:
```javascript
fetch('https://api.groq.com/openai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('groqApiKey')
  },
  body: JSON.stringify({
    model: 'llama-3.3-70b-versatile',
    max_tokens: 10,
    messages: [{role: 'user', content: 'teste'}]
  })
}).then(r => r.json()).then(d => console.log('✅ Resposta:', d)).catch(e => console.log('❌ Erro:', e))
```

### Resultados:

✅ **Se aparecer `✅ Resposta:` com dados**:
- A chave funciona!
- O problema pode ser no código
- Vá para o PASSO 3

❌ **Se aparecer erro 401 (Unauthorized)**:
- A chave está inválida ou expirada
- **SOLUÇÃO**: Gere uma nova chave no PASSO 5

❌ **Se aparecer erro de rede (Failed to fetch)**:
- Problema de internet ou firewall
- **SOLUÇÃO**: Verifique sua conexão

---

## PASSO 3: Carregar Sistema com Debug

1. Abra o arquivo `tutor-ia-fix.js` que criei
2. Copie TODO o conteúdo
3. Cole no Console do navegador (F12)
4. Pressione **Enter**
5. Digite:
   ```javascript
   testIAConn()
   ```
6. Veja os logs detalhados no console

---

## PASSO 4: Testar Manualmente

No console, digite:
```javascript
sendIA()
```

Depois digite uma mensagem no campo do Tutor IA e pressione Enter.

Veja os logs no console para identificar onde está o erro.

---

## PASSO 5: Configurar/Reconfigurar a Chave

### Opção A: Via Painel Admin

1. Vá em **Admin → Configurações**
2. Cole sua chave no campo
3. Clique em **"Salvar"**
4. Clique em **"Testar Conexão"**

### Opção B: Via Console (Mais Rápido)

1. Acesse: https://console.groq.com/
2. Faça login
3. Vá em **"API Keys"**
4. Clique em **"Create API Key"**
5. Copie a chave (começa com `gsk_`)
6. No console do navegador (F12), digite:
   ```javascript
   localStorage.setItem('groqApiKey', 'COLE_SUA_CHAVE_AQUI');
   ```
7. Pressione **Enter**
8. Recarregue a página (**F5**)

---

## 🐛 Erros Comuns e Soluções

### Erro: "Configure sua chave da API"
**Causa**: Chave não está salva no localStorage  
**Solução**: Siga o PASSO 5

### Erro: "Chave inválida" ou "401 Unauthorized"
**Causa**: Chave errada, expirada ou com espaços  
**Solução**: 
1. Gere uma nova chave em https://console.groq.com/
2. Certifique-se de copiar a chave COMPLETA (sem espaços)
3. Configure novamente

### Erro: "Failed to fetch" ou "NetworkError"
**Causa**: Problema de internet ou firewall  
**Solução**:
1. Verifique sua conexão com a internet
2. Tente desativar VPN/Proxy temporariamente
3. Verifique se o firewall não está bloqueando

### Erro: "429 Too Many Requests"
**Causa**: Muitas requisições em pouco tempo  
**Solução**: Aguarde 1 minuto e tente novamente

### Erro: "Quota exceeded"
**Causa**: Limite gratuito atingido (raro)  
**Solução**: 
1. Aguarde 1 hora
2. Ou crie uma nova conta em https://console.groq.com/

### Erro: "Model not found" ou "llama-3.3-70b-versatile"
**Causa**: Modelo foi descontinuado  
**Solução**: Atualize o código para usar `llama-3.1-70b-versatile`

---

## 🔍 Debug Avançado

### Ver TODOS os logs:

No console, digite:
```javascript
// Ativar logs detalhados
localStorage.setItem('debugIA', 'true');

// Recarregar
location.reload();
```

### Limpar cache e recomeçar:

```javascript
// Limpar tudo
localStorage.clear();

// Recarregar
location.reload();

// Configurar novamente
localStorage.setItem('groqApiKey', 'SUA_CHAVE_AQUI');
```

---

## 📞 Ainda com Problemas?

Se nada funcionou:

1. **Tire um print do console** (F12) mostrando o erro
2. **Anote qual erro aparece** na tela
3. **Verifique se**:
   - Sua internet está funcionando
   - Você consegue acessar https://console.groq.com/
   - A chave começa com `gsk_`
   - Você copiou a chave completa (sem espaços)

---

## ✅ Checklist Final

Antes de desistir, verifique:

- [ ] Chave está configurada no localStorage
- [ ] Chave começa com `gsk_`
- [ ] Chave foi copiada completa (sem espaços)
- [ ] Internet está funcionando
- [ ] Console não mostra erros de CORS
- [ ] Testou com `tutor-ia-fix.js`
- [ ] Tentou gerar uma nova chave
- [ ] Limpou o cache e tentou novamente

---

## 🎯 Teste Definitivo

Cole este código no console para um teste completo:

```javascript
(async function(){
  console.log('🧪 TESTE COMPLETO DO TUTOR IA');
  console.log('================================');
  
  // 1. Verificar chave
  const key = localStorage.getItem('groqApiKey');
  console.log('1️⃣ Chave:', key ? '✅ Configurada' : '❌ NÃO configurada');
  
  if(!key || key === 'sua_chave_aqui'){
    console.log('❌ Configure a chave primeiro!');
    console.log('   localStorage.setItem("groqApiKey", "SUA_CHAVE");');
    return;
  }
  
  // 2. Testar conexão
  console.log('2️⃣ Testando conexão...');
  try{
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 50,
        messages: [{role: 'user', content: 'Diga apenas: OK'}]
      })
    });
    
    console.log('   Status:', res.status, res.statusText);
    
    if(res.ok){
      const data = await res.json();
      console.log('   Resposta:', data.choices[0].message.content);
      console.log('✅ TUDO FUNCIONANDO!');
    } else {
      const error = await res.json();
      console.log('❌ Erro:', error);
    }
  }catch(e){
    console.log('❌ Erro de conexão:', e.message);
  }
  
  console.log('================================');
})();
```

---

**Se seguiu todos os passos e ainda não funciona, o problema pode ser:**
- Firewall corporativo bloqueando a API
- Restrições de rede
- Problema temporário na API da Groq

**Tente acessar de outra rede (celular, casa, etc.)**
