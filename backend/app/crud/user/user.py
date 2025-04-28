from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.models.user.user import User
from app.schemas.user.user import UserCreate


async def create_user(db: AsyncSession, user: UserCreate):
    result = await db.execute(select(User).where(User.email == user.email))
    existing_email = result.scalar_one_or_none()
    if existing_email:
        return None

    db_user = User(name=user.name, email=user.email)
    db.add(db_user)             # データをメモリ上でセッションに登録　DBとの通信はしないから同期処理で十分
    await db.commit()           # DBと通信し変更を反映（実行前ならロールバック可能）
    await db.refresh(db_user)   # idなどのDB側で自動生成されるデータを受け取る（不要ならなくてもいい）
    return db_user

async def get_user_by_id(db: AsyncSession, user_id: int):
    result = await db.execute(select(User).where(User.id == user_id))
    return result.scalar_one_or_none()