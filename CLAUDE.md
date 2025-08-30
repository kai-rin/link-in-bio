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
- `app.js`: config.jsのデータを読み込み、DOM操作でコンテンツを動的生成
- `index.html`: 最小限の構造のみ定義、コンテンツはJavaScriptで注入

### ファイル間の依存関係

1. `index.html` が `config.js` と `app.js` を順番にロード
2. `app.js` が `CONFIG` グローバル変数（config.js内）を読み込み
3. DOMContentLoadedイベントでレンダリング処理を実行

## 主要な変更パターン

### 新しいアイコンタイプの追加

`app.js`の`icons`オブジェクトに新しいSVGアイコンを追加：

- 24x24のviewBoxを使用
- stroke-widthは2で統一
- currentColorを使用して色を継承

### リンクの追加・更新

`config.js`の`links`配列を編集：

- `enabled: false`で非表示化
- 利用可能なアイコン: x-twitter, note, kakuyomu, instagram, tiktok, default

## GitHub Pages デプロイ

- リポジトリ Settings → Pages → Source を "Deploy from a branch" に設定
- mainブランチを選択してデプロイ
- URL: `https://[username].github.io/[repository-name]/`
