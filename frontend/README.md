# フロントエンド - React + Vite

このディレクトリは、ReactとViteを使用して構築されたTodoアプリケーションのフロントエンドを含みます。

現在は実装途中です。

## 進捗

### ✅ 実装済：

- アーキテクチャとディレクトリ構造が確定

- Axios を使用したバックエンドAPI連携

### 🔄 実装中：

- Componentsの構築

- Hooksによる処理ロジックとルーティング

### 計画中：

- Zsutandを使用した状態管理

- Tailwind CSSによるUI実装

## 🛠️ 使用技術

- React
- Vite
- TypeScript（予定）
- Axios（API通信）

## 📂 ディレクトリ構成（予定）

```
TODO-APP\FRONTEND
└─app
    ├─node_modules
    ├─public
    └─src
        ├─api
        │  ├─task
        │  └─user
        ├─components
        │  ├─task
        │  ├─user
        │  └─utils
        ├─hooks
        │  ├─task
        │  ├─user
        │  └─utils
        ├─pages
        ├─routes
        └─store
            └─zustand
```

## ▶️ 起動方法

```bash
docker compose up frontend
```

フロントエンド: http://localhost:5173

## 🔧 今後の予定

状態管理（ZustandやContextの導入検討中）

テスト環境（Jest/Testing Library）の導入

コンポーネントの共通化とデザイン整備
