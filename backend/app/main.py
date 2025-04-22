from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.session import async_session
from app.routers.task import task, done
from app.routers.user import user
# パッケージのパスはuvicorn app.main:appでサーバーを起動しているため、
# appディレクトリの親であるbackendディレクトリがルートとみなされる
# そのためパッケージのパス指定はappから始めなければならない
# この場合main.pyもappパッケージの一部とみなされるため、
# appディレクトリ内にも__init__.pyが必要

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def get_db():
    async with async_session() as db:
        try:
            yield db
        finally:
            db.close()

@app.get('/hello')
async def hello():
    return {"message": "hello world!"}

app.include_router(task.router)
app.include_router(done.router)
app.include_router(user.router)