# GitHub Pages セットアップガイド

## 🚀 GitHubへのプッシュ手順

### ステップ1: GitHubでリポジトリ作成
1. [GitHub.com](https://github.com/new) で新規リポジトリを作成
2. リポジトリ名: `link-in-bio` (推奨)
3. Publicを選択
4. 初期化オプションは**すべて無視**

### ステップ2: ローカルリポジトリをGitHubに接続

PowerShellまたはGit Bashで以下のコマンドを実行：

```bash
# YOUR_USERNAMEをあなたのGitHubユーザー名に置き換えてください
git remote add origin https://github.com/YOUR_USERNAME/link-in-bio.git
git branch -M main
git push -u origin main
```

例（kai-rinの場合）：
```bash
git remote add origin https://github.com/kai-rin/link-in-bio.git
git branch -M main
git push -u origin main
```

## 📄 GitHub Pages の有効化

### ステップ3: GitHub Pagesを設定

1. GitHubのリポジトリページを開く
2. **Settings** タブをクリック
3. 左メニューの **Pages** をクリック
4. **Source** セクションで以下を設定：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. **Save** をクリック

### ステップ4: デプロイの確認

- 数分待つと、以下のURLでアクセス可能になります：
  ```
  https://YOUR_USERNAME.github.io/link-in-bio/
  ```

- 例（kai-rinの場合）：
  ```
  https://kai-rin.github.io/link-in-bio/
  ```

## ✅ 確認事項

- [ ] GitHubリポジトリが作成されている
- [ ] ローカルのコードがプッシュされている
- [ ] GitHub Pagesが有効になっている
- [ ] サイトがアクセス可能

## 🔧 トラブルシューティング

### 404エラーが表示される場合
- GitHub Pagesの設定を再確認
- デプロイに5-10分かかることがあります
- ブラウザのキャッシュをクリア（Ctrl+F5）

### プッシュでエラーが出る場合
- GitHubの認証情報を確認
- Personal Access Token（PAT）が必要な場合があります
  1. GitHub Settings → Developer settings → Personal access tokens
  2. Generate new token (classic)
  3. repo権限を付与
  4. パスワードの代わりにトークンを使用

### ページが更新されない場合
- GitHub Actions のビルド状況を確認
- Settings → Pages でビルドステータスを確認