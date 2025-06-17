# Todoアプリケーション（フルスタック版）

このプロジェクトは、大学生としてバックエンドおよびフロントエンド開発の実践力を身につけることを目的に開発されました。
FastAPI + React + PostgreSQL + Dockerによるフルスタック構成を採用しています。

## 目標

- できる限り実務的・実践的なベストプラクティスを意識する

- アーキテクチャーを意識した設計

- 責務分離を意識した個別のモジュールの実装

- フロントエンド・バックエンド・DBの接続を実装しながら理解する

## 🔧 技術スタック

- バックエンド: Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL
- フロントエンド: React, Vite, TypeScript（予定）
- 開発環境: Docker, docker-compose
- 認証: パスワードハッシュによる認証（JWTは未実装）
- デプロイ: ローカル開発環境のみ（本番環境は未定）

## 📂 主要なディレクトリ構成

```bash
.
├── backend/ # FastAPI ベースのバックエンド
├── frontend/ # React + Vite ベースのフロントエンド
├── docker-compose.yml
└── README.md
```

## ▶️ 起動方法

### ビルド

初回: poetryを使用して必要なライブラリのインストールを行う

```bash
docker compose build --no-cache
docker-compose run --rm --entrypoint "poetry install --no-root" backend
```

マイグレーションの適用

```bash
docker compose run --rm --entrypoint "poetry run alembic upgrade head" backend
```

起動

```bash
docker compose up
```

### 起動

以下のコマンドでバックエンド・フロントエンド・DBを含む開発環境が起動します。

```bash
docker compose up
```

- フロントエンド: http://localhost:5173

- バックエンド(API): http://localhost:8000

- Swagger UI: http://localhost:8000/docs

## 開発状況

開発終了

## 実装の具体的内容

### バックエンド

大別して7つに機能を分離して実装

- models：テーブルをクラスで定義

- routers：APIエンドポイントと例外処理

- schemas：レスポンスとリクエストのスキーマ定義

- crud：実際の処理部分

上記４つではtaskとuserでさらに分離

taskはlist,task,doneで分離しているが、doneはtaskに統合しており未使用

- db：DB接続の設定

- utils：認証関連のユーティリティ

- main.py：エントリーポイント

また、Alembicによるマイグレーションも実装

ライブラリはPoetryで管理

### フロントエンド

実装部分はfrontend/app/src以下

大別して５つに機能を分離して実装

- api：APIエンドポイント

- assets：npm createで生成されたアセットで未使用

- component：ページごと、機能ごとにUIコンポーネントと処理を分離

- router：React-Routerによるルーティング

- App.jsx, main.jsx：エントリーポイント

componentでは主に３つに分離

- auth：ログインページとサインアップページの処理を定義

- todo：listとtaskに分離し、それぞれ機能ごとに処理を定義

- user：ユーザーページの処理を定義
