from typing import Tuple, Optional

from sqlalchemy import select
from sqlalchemy.engine import Result
from sqlalchemy.ext.asyncio import AsyncSession

import app.models.task.done as done_model


async def get_done(db: AsyncSession, task_id: int) -> Optional[done_model.Done]:
    result: Result = await db.execute(
        select(done_model.Done).filter(done_model.Done.id == task_id)
    )
    done: Optional[Tuple[done_model.Done]] = result.first()
    return done[0] if done is not None else None


async def create_done(db: AsyncSession, task_id: int) -> done_model.Done:
    done = done_model.Done(id=task_id)
    db.add(done)
    await db.commit()
    await db.refresh(done)
    return done


async def delete_done(db: AsyncSession, original: done_model.Done) -> None:
    await db.delete(original)
    await db.commit()