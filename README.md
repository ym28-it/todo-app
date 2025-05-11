# Todoアプリケーション（フルスタック版）

このプロジェクトは、大学生としてバックエンドおよびフロントエンド開発の実践力を身につけることを目的に開発されました。
FastAPI + React + Dockerによるフルスタック構成を採用しています。

## 🔧 技術スタック

- バックエンド: Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL
- フロントエンド: React, Vite, TypeScript（予定）
- 開発環境: Docker, docker-compose
- 認証: パスワードハッシュによる認証（JWTは未実装）
- デプロイ: ローカル開発環境のみ（本番環境は未定）

## 📂 ディレクトリ構成

```bash
.
├── backend/ # FastAPI ベースのバックエンド
├── frontend/ # React + Vite ベースのフロントエンド
├── docker-compose.yml
└── README.md
```

## ▶️ 起動方法

以下のコマンドでバックエンド・フロントエンド・DBを含む開発環境が起動します。

```bash
docker-compose up --build
```

- フロントエンド: http://localhost:5173

- バックエンド(API): http://localhost:8000

- Swagger UI: http://localhost:8000/docs

## 開発状況

### ✅ 実装済：

- Dockerによる環境構築

- バックエンドAPI（FastAPI）

- フロントエンドのAPIエンドポイント

### 🔄 実装中：

- React UI Componentsの構築

- Hooksによるフロントエンドの処理ロジック

### 計画中：

- JWT認証

- CI/CD導入

- ER図の自動生成
