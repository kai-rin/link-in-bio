# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

これはGitHub Pagesでホストするシンプルなリンクページプロジェクトです。設定ファイルベースでリンクを管理し、JavaScriptで動的にレンダリングします。

## 開発環境

- **静的サイト**: HTML/CSS/JavaScript のみで構成
- **ビルドツール不要**: npmやビルドプロセスなし
- **ローカルテスト**: HTMLファイルを直接ブラウザで開くだけで動作確認可能

## コアアーキテクチャ

### 設定駆動型アプローチ

- `config.js`: ユーザーが編集する唯一のファイル。プロフィール情報とリンクデータを保持
- `icons.js`: アイコン設定を外部化したファイル。SVGアイコンの管理とカスタマイズが容易
- `app.js`: config.jsとicons.jsのデータを読み込み、DOM操作でコンテンツを動的生成
- `index.html`: 最小限の構造のみ定義、コンテンツはJavaScriptで注入

### ファイル間の依存関係

1. `index.html` が `config.js`、`icons.js`、`app.js` を順番にロード
2. `app.js` が `CONFIG`（config.js）と `ICONS`（icons.js）のグローバル変数を読み込み
3. DOMContentLoadedイベントでレンダリング処理を実行
4. QRCode.jsライブラリはCDNから読み込み、QRコード生成に使用

## 主要な変更パターン

### 新しいアイコンタイプの追加

`icons.js`の`ICONS`オブジェクトに新しいSVGアイコンを追加：

- 24x24のviewBoxを使用（一部例外あり）
- stroke-widthは2で統一（可能な限り）
- currentColorを使用して色を継承
- カスタムSVGも追加可能（noteやkakuyomuなど）

### リンクの追加・更新

`config.js`の`links`配列を編集：

- `enabled: false`で非表示化
- 利用可能なアイコン: x-twitter, github, note, kakuyomu, instagram, tiktok, youtube, linkedin, discord, default

## QRコード機能

### アーキテクチャ

- **レスポンシブ対応**: モバイルとデスクトップで異なる表示位置
- **外部ライブラリ**: QRCode.js (CDN: jsdelivr)
- **動的生成**: JavaScript で画面サイズに応じてQRコード生成

### 表示仕様

- **モバイル（768px以下）**: リンクボタンの下方かつ左右中央に表示
- **タブレット・デスクトップ（769px以上）**: 画面右下に固定表示
- **デザイン**: 透過背景、白色QRコード（filter: invert使用）、ぼかし効果

### 実装上の注意点

- 2つのQRコンテナ（mobile/desktop）を使い分け
- リサイズ時の再生成にデバウンス処理を実装
- CDN読み込み失敗時の適切なエラーハンドリング

## SEO・メタ情報

- Open Graph対応（Facebook等のSNSプレビュー）
- Twitter Card対応
- 日本語コンテンツ対応（lang="ja"）
- プロフィール画像をOGP画像として使用

## GitHub Pages デプロイ

- リポジトリ Settings → Pages → Source を "Deploy from a branch" に設定
- mainブランチを選択してデプロイ
- URL: `https://[username].github.io/[repository-name]/`

### デプロイ時の注意点

- CDN（jsdelivr）からの外部ライブラリ読み込みあり
- HTTPS環境での動作前提
- 一部のブラウザサポート要件（backdrop-filter、filter: invert）
- GitHub Pagesのキャッシュが影響する場合がある

## 開発で得られた知見

### アイコン設定の外部化

- `app.js`内のアイコン定義を`icons.js`に分離
- カスタマイズ性とメンテナンス性が大幅に向上
- 新しいアイコン追加時の作業が簡素化

### レスポンシブQRコード実装

- 単一コンテナでの実装は複雑になるため、用途別にコンテナを分離
- CSS メディアクエリとJavaScript の連携でスムーズな切り替えを実現
- デバウンス処理でリサイズ時のパフォーマンス向上

### ブラウザ互換性への配慮

- モダンCSS（backdrop-filter、filter）使用時はフォールバックを検討
- 外部CDN依存時は読み込み失敗を想定したエラーハンドリング
- GitHub Pages環境では一部の動作タイミングが異なる場合がある
