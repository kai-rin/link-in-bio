# Link in Bio Page

GitHub Pagesでホストするシンプルなリンクページです。ダークテーマUIを採用。

## 特徴

- **設定ファイル管理**: `config.js`を編集するだけでリンクを更新可能
- **UI**: 黒背景のシンプルでモダンなデザイン
- **レスポンシブ対応**: モバイル・デスクトップ両対応
- **カスタマイズ可能**: アイコン、色、レイアウトの調整が簡単

## ファイル構成

- `index.html` - メインHTML（編集不要）
- `config.js` - **リンク設定ファイル（これを編集）**
- `app.js` - JavaScript（動的レンダリング処理）
- `styles.css` - スタイルシート
- `profile.svg` - デフォルトプロフィール画像
- `favicon.svg` - ファビコン

## リンクの追加・編集

`config.js`の`links`配列に新しいオブジェクトを追加：

```javascript
{
  title: "表示名",
  url: "https://example.com/yourprofile",
  icon: "default",
  enabled: true
}
```

- `enabled: false`にすると、そのリンクは非表示になります
- `icon`は以下から選択：`x-twitter`, `note`, `kakuyomu`, `instagram`, `tiktok`, `default`

## カスタマイズ

### プロフィール画像の変更

1. 新しい画像ファイルをリポジトリに追加
2. `config.js`の`avatar`パスを更新

### 色やデザインの変更

`styles.css`を編集してデザインをカスタマイズ可能

## トラブルシューティング

- **リンクが表示されない**: `config.js`の構文エラーを確認（JavaScriptの構文に注意）
- **404エラー**: GitHub Pagesが有効になっているか確認
- **更新が反映されない**: ブラウザのキャッシュをクリア（Ctrl+F5）
- **ローカルでテストする場合**: ブラウザで直接HTMLファイルを開けば動作します
