from typing import List, Tuple, Optional
import uuid

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.engine import Result

import app.models.task.list as list_model
import app.schemas.task.list as list_schema


async def get_list(db: AsyncSession, list_id: uuid.UUID) -> list_model.List:
    result: Result = await db.execute(
        select(list_model.List).filter(list_model.List.list_id == list_id)
    )
    
    return result.unique().scalar_one_or_none()


async def create_list(
        db: AsyncSession, list_create: list_schema.ListCreate
) -> list_model.List:
    list = list_model.List(user_id=list_create.user_id, list_name=list_create.list_name)

    db.add(list)
    await db.commit()
    await db.refresh(list)
    return list


async def rename_list(
        db: AsyncSession, list_rename: list_schema.ListRename, original: list_model.List
) -> list_model.List:
    original.list_name = list_rename.list_name

#     db.add(original)
    await db.commit()
    await db.refresh(original)
    return original


async def update_list_explain(
        db: AsyncSession, list_explain: list_schema.ListExplainUpdate, original: list_model.List
) -> list_model.List:
    original.list_explain = list_explain.list_explain

#     db.add(original)
    await db.commit()
    await db.refresh(original)
    return original


async def delete_list(
        db: AsyncSession, original: list_model.List
) -> None:
    await db.delete(original)
    await db.commit()