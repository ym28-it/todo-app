from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from test.echo import echo

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

@app.get('/hello')
async def hello():
    return {"message": "hello world!"}

echo(app)