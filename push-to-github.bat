@echo off
echo GitHubリポジトリにプッシュします...
echo.
echo 注意: 以下のYOUR_USERNAMEをあなたのGitHubユーザー名に置き換えてください
echo 注意: REPO_NAMEをあなたが作成したリポジトリ名に置き換えてください
echo.
echo 実行するコマンド:
echo git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
echo git branch -M main
echo git push -u origin main
echo.
echo 例:
echo git remote add origin https://github.com/kai-rin/link-in-bio.git
echo git branch -M main  
echo git push -u origin main
echo.
pause