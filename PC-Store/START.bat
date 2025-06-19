@echo off
color 0A
cls
echo.
echo  /$$$$$$$   /$$$$$$         /$$$$$$  /$$$$$$$$ /$$$$$$  /$$$$$$$  /$$$$$$$$
echo  ^| $$__  $$ /$$__  $$       /$$__  $$^|__  $$__//$$__  $$^| $$__  $$^| $$_____/
echo  ^| $$  \ $$^| $$  \__/      ^| $$  \__/   ^| $$  ^| $$  \ $$^| $$  \ $$^| $$      
echo  ^| $$$$$$$/^| $$            ^|  $$$$$$    ^| $$  ^| $$  ^| $$^| $$$$$$$/^| $$$$$   
echo  ^| $$____/ ^| $$             \____  $$   ^| $$  ^| $$  ^| $$^| $$__  $$^| $$__/   
echo  ^| $$      ^| $$    $$       /$$  \ $$   ^| $$  ^| $$  ^| $$^| $$  \ $$^| $$      
echo  ^| $$      ^|  $$$$$$/      ^|  $$$$$$/   ^| $$  ^|  $$$$$$/^| $$  ^| $$^| $$$$$$$$
echo  ^|__/       \______/        \______/    ^|__/   \______/ ^|__/  ^|__/^|________/
echo.
echo.

echo ========================================
echo   KHOI DONG PC STORE
echo ========================================
echo.

REM Kill các process đang dùng port
echo [1/4] Dang kiem tra cac port...
FOR /F "tokens=5" %%a IN ('netstat -aon ^| findstr :3000') DO (
    taskkill /F /PID %%a >nul 2>&1
)
FOR /F "tokens=5" %%a IN ('netstat -aon ^| findstr :3001') DO (
    taskkill /F /PID %%a >nul 2>&1
)

echo [2/4] Port da san sang!
echo.

echo [3/4] Dang khoi dong server...
echo.
echo React App: http://localhost:3000
echo JSON Server: http://localhost:3001
echo.

REM Đợi 3 giây
timeout /t 3 /nobreak >nul

echo [4/4] Dang mo trinh duyet...
start http://localhost:3000

echo.
echo ========================================
echo   SERVER DANG CHAY
echo ========================================
echo.
echo Nhan Ctrl+C de dung server
echo.

REM Chạy cả React app và json-server
npm run dev 