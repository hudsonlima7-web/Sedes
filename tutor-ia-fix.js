// ================================================================
// TUTOR IA - SISTEMA COMPLETO COM DEBUG
// Cole este código no console do navegador (F12) para substituir
// as funções do Tutor IA e adicionar logs de debug
// ================================================================

console.log('🔧 Carregando sistema de IA com debug...');

// Função para obter a chave da API
window.getGroqApiKey = function(){
 const key = localStorage.getItem('groqApiKey');
 console.log('🔑 Chave Groq:', key ? `Configurada (${key.substring(0,10)}...)` : 'NÃO configurada');
 return key || '';
};

// Teste de conexão
window.testIAConn = async function(){
 console.log('🧪 Testando conexão com Groq API...');
 const GROQ_API_KEY = getGroqApiKey();
 const errBox = document.getElementById('iaErrBox');
 
 if(!GROQ_API_KEY || GROQ_API_KEY === 'sua_chave_aqui'){
  console.log('❌ Chave não configurada');
  errBox.innerHTML='🔑 <strong>Configure sua chave da API Groq (GRATUITA!)</strong> — Vá em <strong>Admin → Configurações</strong>';
  errBox.classList.add('show');
  return;
 }
 
 try{
  console.log('📡 Enviando requisição de teste...');
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions',{
   method:'POST',
   headers:{
    'Content-Type':'application/json',
    'Authorization': `Bearer ${GROQ_API_KEY}`
   },
   body:JSON.stringify({
    model:'llama-3.3-70b-versatile',
    max_tokens:10,
    messages:[{role:'user',content:'teste'}]
   })
  });
  
  console.log('📥 Resposta:', r.status, r.statusText);
  
  if(r.ok){
   console.log('✅ Conexão OK!');
   errBox.classList.remove('show');
   alert('✅ Tutor IA funcionando perfeitamente!');
  } else {
   const errorData = await r.json().catch(() => ({}));
   console.log('❌ Erro:', errorData);
   errBox.innerHTML=`⚠️ <strong>Erro ${r.status}:</strong> ${errorData.error?.message || 'Erro desconhecido'}`;
   errBox.classList.add('show');
   alert(`❌ Erro ${r.status}: ${errorData.error?.message || 'Erro desconhecido'}`);
  }
 }catch(e){
  console.log('❌ Erro de conexão:', e);
  errBox.innerHTML='⚠️ <strong>Erro de conexão:</strong> ' + e.message;
  errBox.classList.add('show');
  alert('❌ Erro de conexão: ' + e.message);
 }
};

// Enviar mensagem para IA
window.sendIA = async function(){
 console.log('🚀 Enviando mensagem para IA...');
 const inp = document.getElementById('iaInp');
 const msg = inp.value.trim();
 
 if(!msg){
  console.log('⚠️ Mensagem vazia');
  return;
 }
 
 console.log('📝 Mensagem:', msg);
 const chat = document.getElementById('iaChat');
 chat.innerHTML += `<div class="msg us"><div class="ms">Você</div><div class="mb">${msg}</div></div>`;
 inp.value = '';
 chat.scrollTop = chat.scrollHeight;
 
 const lid = 'l' + Date.now();
 chat.innerHTML += `<div class="msg ia" id="${lid}"><div class="ms">🤖 Tutor</div><div class="mb"><span class="iadot"></span><span class="iadot"></span><span class="iadot"></span></div></div>`;
 chat.scrollTop = chat.scrollHeight;
 
 const GROQ_API_KEY = getGroqApiKey();
 
 if(!GROQ_API_KEY || GROQ_API_KEY === 'sua_chave_aqui'){
  console.log('❌ Chave não configurada');
  document.getElementById(lid).innerHTML = `<div class="ms">🤖 Tutor</div><div class="mb" style="color:var(--vm)">🔑 Configure sua chave em <strong>Admin → Configurações</strong></div>`;
  return;
 }
 
 try{
  console.log('📡 Enviando para Groq API...');
  
  const requestBody = {
   model: 'llama-3.3-70b-versatile',
   max_tokens: 1000,
   temperature: 0.7,
   messages: [
    {
     role: 'system',
     content: 'Você é um tutor especializado no Concurso SEDES DF 2026, banca Instituto Quadrix. Responda em português de forma direta e pedagógica.'
    },
    {
     role: 'user',
     content: msg
    }
   ]
  };
  
  console.log('📦 Request:', requestBody);
  
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${GROQ_API_KEY}`
   },
   body: JSON.stringify(requestBody)
  });
  
  console.log('📥 Resposta:', res.status, res.statusText);
  
  if(!res.ok){
   const errorData = await res.json().catch(() => ({}));
   console.log('❌ Erro da API:', errorData);
   throw new Error(`HTTP ${res.status}: ${errorData.error?.message || 'Erro desconhecido'}`);
  }
  
  const data = await res.json();
  console.log('✅ Dados recebidos:', data);
  
  const resposta = data.choices?.[0]?.message?.content || 'Sem resposta.';
  console.log('💬 Resposta:', resposta.substring(0, 100) + '...');
  
  document.getElementById(lid).innerHTML = `<div class="ms">🤖 Tutor</div><div class="mb">${resposta.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</div>`;
  document.getElementById('iaErrBox').classList.remove('show');
  
  console.log('✅ Sucesso!');
  
 }catch(err){
  console.log('❌ Erro:', err);
  let errMsg = '⚠️ Erro: ' + err.message;
  
  if(err.message.includes('401') || err.message.includes('Unauthorized')){
   errMsg = '🔑 Chave inválida. Verifique em Admin → Configurações';
  } else if(err.message.includes('429')){
   errMsg = '⏳ Muitas requisições. Aguarde alguns segundos';
  } else if(err.message.includes('Failed to fetch')){
   errMsg = '🌐 Erro de rede. Verifique sua internet';
  }
  
  document.getElementById(lid).innerHTML = `<div class="ms">🤖 Tutor</div><div class="mb" style="color:var(--vm)">${errMsg}<br><small>${err.message}</small></div>`;
  document.getElementById('iaErrBox').innerHTML = errMsg;
  document.getElementById('iaErrBox').classList.add('show');
 }
 
 chat.scrollTop = chat.scrollHeight;
};

console.log('✅ Sistema de IA carregado! Use testIAConn() para testar.');
console.log('📝 Para configurar a chave:');
console.log('   localStorage.setItem("groqApiKey", "SUA_CHAVE_AQUI");');
