import uuid
from sqlalchemy import and_
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

import app.models.user.user as user_model
import app.schemas.user.user as user_schema
from app.utils.auth import hash_password


async def create_user(
        db: AsyncSession, user: user_schema.UserCreate
) -> user_model.User:
    db_user = user_model.User(name=user.name, email=user.email, password=hash_password(user.password))
    db.add(db_user)             # データをメモリ上でセッションに登録　DBとの通信はしないから同期処理で十分
    await db.commit()           # DBと通信し変更を反映（実行前ならロールバック可能）
    await db.refresh(db_user)   # idなどのDB側で自動生成されるデータを受け取る（不要ならなくてもいい）
    return db_user


async def get_user_by_id(
        db: AsyncSession, user_id: uuid.UUID
) -> user_model.User:
    result = await db.execute(select(user_model.User).where(user_model.User.user_id == user_id))
    return result.scalar_one_or_none()


async def get_user_by_email(
        db: AsyncSession, user_email: str
) -> user_model.User:
    result = await db.execute(select(user_model.User).where(user_model.User.email == user_email))

    return result.scalar_one_or_none()


async def switch_password_usage(
        db: AsyncSession, password_usage: user_schema.UserPasswordUsage, original: user_model.User
) -> user_model.User:
    original.password_usage = password_usage.password_usage

    await db.commit()
    await db.refresh(original)
    return original


async def rename_user_name(
        db: AsyncSession, user_name: user_schema.RenameUserName, original: user_model.User
) -> user_model.User:
    original.user_name = user_name.user_name

    await db.commit()
    await db.refresh(original)
    return original


async def log_in(
        db: AsyncSession, log_in_info: user_schema.LogIn
) -> bool:
    result = await db.execute(
        select(user_model.User).where(
            and_(user_model.User.email == log_in_info.email,
                user_model.User.password == log_in_info.password
                )
            )
    )

    return result.scalar_one_or_none()


async def user_delete(
        db: AsyncSession, original: user_model.User
) -> None:
    await db.delete(original)
    await db.commit()