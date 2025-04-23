
from app.db.session import async_session

async def get_db():
    async with async_session() as db:
        try:
            yield db
        finally:
            db.close()