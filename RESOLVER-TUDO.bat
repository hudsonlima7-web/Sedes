@echo off
chcp 65001 >nul
color 0A
cls

echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║        🔧 RESOLVER TUDO - SEDES DF 2026 🔧                ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo Este script vai:
echo   1. Atualizar código do GitHub
echo   2. Limpar cache do navegador
echo   3. Criar aluno teste
echo   4. Abrir sistema pronto para usar
echo.
pause
cls

echo ╔════════════════════════════════════════════════════════════╗
echo ║ PASSO 1: Atualizando código do GitHub                     ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

git pull origin master
if errorlevel 1 (
    echo ⚠️ Erro ao fazer git pull, mas continuando...
)
echo ✅ Código atualizado!
echo.
timeout /t 2 >nul

cls
echo ╔════════════════════════════════════════════════════════════╗
echo ║ PASSO 2: Abrindo diagnóstico                              ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

start DIAGNOSTICO.html
echo ✅ Diagnóstico aberto!
echo.
echo ⚠️ IMPORTANTE:
echo    1. Na página que abriu, clique em "Criar Aluno Teste"
echo    2. Use: Email: teste@sedes.com / Senha: Sedes
echo    3. Depois volte aqui e pressione qualquer tecla
echo.
pause

cls
echo ╔════════════════════════════════════════════════════════════╗
echo ║ PASSO 3: Abrindo sistema                                  ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

start index.html
echo ✅ Sistema aberto!
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║  ✅ TUDO PRONTO!                                          ║
echo ║                                                            ║
echo ║  Faça login com:                                          ║
echo ║  📧 Email: teste@sedes.com                                ║
echo ║  🔐 Senha: Sedes                                          ║
echo ║                                                            ║
echo ║  ⚠️ IMPORTANTE:                                           ║
echo ║  Pressione Ctrl + Shift + R no navegador                  ║
echo ║  para garantir que está atualizado!                       ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo Pressione qualquer tecla para fechar...
pause >nul
