# フロントエンド - React + Vite

このディレクトリは、ReactとViteを使用して構築されたTodoアプリケーションのフロントエンド

## 🛠️ 使用技術

- React
- Vite
- TypeScript（予定）
- Axios（API通信）

## 📂 ディレクトリ構成（予定）

```bash
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
        └─router
```

## ▶️ 起動方法

```bash
docker compose up frontend
```

フロントエンド: http://localhost:5173

## 🔧 今後の予定

状態管理（ZustandやContextの導入検討中）

テスト環境（Jest/Testing Library）の導入

TailwindCSSを使用したUIの改善
