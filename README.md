# Sample Electron App

必要最小限な React + Electron + TypeScript 構成の検証サンプルアプリケーション

## 概要

このプロジェクトは、Electron、React、Vite、TypeScriptを使用したシンプルなデスクトップアプリケーションです。
最小限の構成で、Macデスクトップアプリとして動作します。

## 技術スタック

- **Electron** ^28.0.0 - デスクトップアプリケーションフレームワーク
- **React** ^18.2.0 - UIライブラリ
- **TypeScript** ^5.3.0 - 型安全な開発環境
- **Vite** ^5.0.0 - 高速ビルドツール
- **Node.js** - 開発環境（推奨: v18以上）

## ディレクトリ構成

```
sample-electron/
├── electron/
│   └── main.ts          # Electronメインプロセス（TypeScript）
├── src/
│   ├── App.tsx          # Reactメインコンポーネント（TypeScript）
│   ├── main.tsx         # Reactエントリーポイント（TypeScript）
│   └── index.html       # HTMLテンプレート
├── public/              # 静的アセット（アイコン、画像など）
├── dist/                # ビルド成果物（自動生成）
├── release/             # パッケージ化されたアプリ（自動生成）
├── vite.config.ts       # Vite設定ファイル（TypeScript）
├── tsconfig.json        # TypeScript設定ファイル
└── package.json         # プロジェクト設定
```

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発モードで起動

```bash
npm run electron:dev
```

このコマンドは以下を自動で実行します：
- Vite開発サーバーを起動（http://localhost:5173）
- Electronウィンドウでアプリを表示
- ホットリロード有効

## ビルド

### Macアプリケーションとしてビルド

```bash
npm run dist
```

以下のファイルが `release/` ディレクトリに生成されます：

- **Sample Electron App.app** - Macアプリケーション（`release/mac-arm64/`内）
- **Sample Electron App-1.0.0-arm64.dmg** - インストーラー（DMG形式）
- **Sample Electron App-1.0.0-arm64-mac.zip** - 配布用ZIP

### ビルド成果物の使用方法

#### 方法1: .appファイルを直接起動
```bash
open "release/mac-arm64/Sample Electron App.app"
```

#### 方法2: Applicationsフォルダにインストール
Finderで `release/mac-arm64/Sample Electron App.app` を開き、Applicationsフォルダにドラッグ&ドロップ

#### 方法3: DMGファイルを使用
`Sample Electron App-1.0.0-arm64.dmg` をダブルクリックして、表示されたウィンドウでアプリをApplicationsフォルダにドラッグ

## スクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | Vite開発サーバーのみ起動 |
| `npm run build` | Viteでプロジェクトをビルド |
| `npm run electron:dev` | 開発モードでElectronアプリを起動 |
| `npm run dist` | Macアプリをビルド（DMG + ZIP） |
| `npm run dist:dir` | Macアプリをビルド（.appのみ） |

## アプリケーションの機能

- シンプルなカウンターボタン
- クリックで数値が増加
- React Hooksを使用（useState）

## トラブルシューティング

### 初回起動時に「開発元が未確認」の警告が表示される

これはコード署名がされていないためです。以下の手順で起動できます：

1. アプリを右クリック
2. 「開く」を選択
3. 確認ダイアログで「開く」をクリック

### アプリが起動しない / 画面が真っ白

1. 開発者ツールでエラーを確認
2. `npm run dist` で再ビルド
3. Node.jsとnpmのバージョンを確認

### ビルドエラーが発生する

```bash
# node_modulesとビルド成果物を削除して再インストール
rm -rf node_modules dist release
npm install
npm run dist
```

## 開発のポイント

### TypeScript

TypeScriptによる型安全な開発が可能です：

- **厳格な型チェック**: `tsconfig.json` で `strict: true` を設定
- **型定義**: React、Electron、Node.jsの型定義を自動で提供
- **開発体験**: VSCodeなどのエディタで自動補完とエラー検出が可能

### ディレクトリ構造

最小限かつ整理されたディレクトリ構造を採用：

- **`src/`**: すべてのソースコード（React + HTML）を一箇所に集約
- **`public/`**: 静的アセット（アイコン、画像など）を配置
- **`electron/`**: Electronメインプロセスのコードを分離
- **設定ファイル**: プロジェクトルートに配置（見通しが良い）

この構造により、ソースコードと設定ファイルが明確に分離され、プロジェクトが成長しても管理しやすくなります。

### ファイルパスの解決

パッケージ化されたアプリでは、`app.getAppPath()` を使用してアプリケーションのルートパスを取得します：

```typescript
const indexPath = path.join(app.getAppPath(), 'dist', 'index.html')
```

### asar無効化

現在の設定では `asar: false` にしており、ファイルを圧縮せずにそのまま配置しています。
これにより、ファイルパスの問題を回避できます。

### 開発環境と本番環境の切り替え

`app.isPackaged` を使用して、開発モードとビルドされたアプリを自動判定します。

## ライセンス

ISC

## 作成者

検証サンプルプロジェクト
