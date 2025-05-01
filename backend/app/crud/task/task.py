from typing import List, Tuple, Optional
import uuid

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.engine import Result

import app.models.task.task as task_model
# import app.models.task.done as done_model
import app.schemas.task.task as task_schema


async def create_task(
        db: AsyncSession, task_create: task_schema.TaskCreate
) -> task_model.Task:
    task = task_model.Task(list_id=task_create.list_id, task_name=task_create.task_name)

    db.add(task)
    await db.commit()
    await db.refresh(task)
    return task


# async def get_tasks_with_done(db: AsyncSession) -> List[Tuple[int, str, bool]]:
#     result: Result = await (
#         db.execute(
#             select(
#                 task_model.Task.task_id,
#                 task_model.Task.task_name,
#                 done_model.Done.task_id.isnot(None).label("done"),
#             ).outerjoin(done_model.Done)
#         )
#     )
#     return result.all()


async def get_task(db: AsyncSession, task_id: uuid.UUID) -> Optional[task_model.Task]:
    result: Result = await db.execute(
        select(task_model.Task).filter(task_model.Task.task_id == task_id)
    )
    task: Optional[Tuple[task_model.Task]] = result.first()
    return task[0] if task is not None else None


async def rename_task(
        db: AsyncSession, task_rename: task_schema.TaskRename, original: task_model.Task
) -> task_model.Task:
    original.task_name = task_rename.task_name

    await db.commit()
    await db.refresh(original)
    return original


async def update_task_explain(
        db: AsyncSession, task_explain: task_schema.TaskExplainUpdate, original: task_model.Task
) -> task_model.Task:
    original.task_explain = task_explain.task_explain

    await db.commit()
    await db.refresh(original)
    return original


async def update_is_done(
        db: AsyncSession, is_done: task_schema.TaskIsDone, original: task_model.Task
) -> task_model.Task:
    original.is_done = is_done.is_done

    await db.commit()
    await db.refresh(original)
    return original


async def delete_task(
        db: AsyncSession, original: task_model.Task
) -> None:
    await db.delete(original)
    await db.commit()