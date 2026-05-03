@echo off
chcp 65001 >nul
color 0A
cls

echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║          🔄 ATUALIZAR SISTEMA SEDES DF 2026 🔄            ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo.

echo [1/4] Verificando Git...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git não encontrado!
    echo.
    echo Por favor, instale o Git primeiro.
    pause
    exit /b 1
)
echo ✅ Git encontrado!
echo.

echo [2/4] Atualizando código do GitHub...
git pull origin master
if errorlevel 1 (
    echo ⚠️ Erro ao fazer git pull
    echo Tentando continuar...
)
echo ✅ Código atualizado!
echo.

echo [3/4] Verificando arquivos...
if exist "index.html" (
    echo ✅ index.html encontrado
) else (
    echo ❌ index.html NÃO encontrado!
    pause
    exit /b 1
)

if exist "ATUALIZAR-AGORA.html" (
    echo ✅ ATUALIZAR-AGORA.html encontrado
) else (
    echo ❌ ATUALIZAR-AGORA.html NÃO encontrado!
)
echo.

echo [4/4] Abrindo página de atualização...
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║  ⚠️  IMPORTANTE: SIGA AS INSTRUÇÕES NA PÁGINA  ⚠️         ║
echo ║                                                            ║
echo ║  1. A página vai verificar se está atualizado             ║
echo ║  2. Se NÃO estiver, limpe o cache do navegador           ║
echo ║  3. Pressione: Ctrl + Shift + Delete                      ║
echo ║  4. Marque "Imagens e arquivos em cache"                  ║
echo ║  5. Selecione "Todo o período"                            ║
echo ║  6. Clique em "Limpar dados"                              ║
echo ║  7. Clique no botão "Abrir Sistema Atualizado"            ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

timeout /t 3 >nul

start ATUALIZAR-AGORA.html

echo.
echo ✅ Página de atualização aberta!
echo.
echo Pressione qualquer tecla para fechar esta janela...
pause >nul
