# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

GitHub Pagesでホストするシンプルなリンクページ。設定ファイルベースでリンクを管理し、JavaScriptで動的にレンダリングする静的サイト。

## 開発環境

- **構成**: HTML/CSS/JavaScript のみ（ビルドツール不要）
- **ローカルテスト**: `index.html`をブラウザで直接開くだけで動作確認可能
- **外部依存**: QRCode.js（CDN: jsdelivr）

## ファイル構成と編集対象

| ファイル | 役割 | 編集頻度 |
|---------|------|---------|
| `config.js` | プロフィール情報・リンクデータ | **高（ユーザーが主に編集）** |
| `icons.js` | SVGアイコン定義 | 中（新アイコン追加時） |
| `styles.css` | デザイン・レイアウト | 中（デザイン変更時） |
| `app.js` | レンダリングロジック | 低（機能追加時のみ） |
| `index.html` | HTML構造・メタ情報 | 低（SEO設定変更時のみ） |

## アーキテクチャ

### データフロー

```
index.html
  └─> config.js (CONFIG グローバル変数)
  └─> icons.js (ICONS グローバル変数)
  └─> app.js
        └─> DOMContentLoaded → init()
              ├─> renderProfile(CONFIG.profile)
              ├─> renderLinks(CONFIG.links)
              └─> generateQRCode()
```

### QRコード表示

- **モバイル（≤768px）**: リンク下方中央、`#qrcode-mobile`コンテナ
- **デスクトップ（>768px）**: 画面右下固定、`#qrcode-desktop`コンテナ
- リサイズ時は300msデバウンスで再生成

## 主要な変更パターン

### リンクの追加・更新

`config.js`の`links`配列を編集：

```javascript
{
  title: "表示名",
  url: "https://example.com",
  icon: "default",  // x-twitter, github, note, kakuyomu, instagram, tiktok, youtube, linkedin, discord, default
  enabled: true     // falseで非表示
}
```

### 新しいアイコンの追加

`icons.js`の`ICONS`オブジェクトに追加：

- viewBox: 24x24推奨
- stroke-width: 2で統一
- 色: `currentColor`を使用して継承

## GitHub Pages デプロイ

1. リポジトリ Settings → Pages → Source: "Deploy from a branch"
2. mainブランチを選択
3. URL: `https://[username].github.io/[repository-name]/`

### 注意点

- CDN依存あり（jsdelivr）- 読み込み失敗時のエラーハンドリング実装済み
- モダンCSS使用（backdrop-filter、filter: invert）- 古いブラウザでは一部機能が動作しない可能性
- GitHub Pagesのキャッシュ影響時はブラウザキャッシュクリア（Ctrl+F5）
