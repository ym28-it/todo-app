from typing import List, Tuple, Optional
import uuid

from sqlalchemy.ext.asyncio import AsyncSession

import app.models.task.list as list_model
import app.schemas.task.list as list_schema


async def create_list(
        db: AsyncSession, user_id: uuid.UUID, list_create: list_schema.ListCreate
) -> list_model.List:
    list = list_model.List(user_id=user_id, **list_create.dict())

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