import uuid
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

import app.schemas.task.task as task_schema
import app.crud.task.task as task_crud
from app.db.db import get_db


router = APIRouter()


# @router.get("/tasks", response_model=List[task_schema.Task])
# async def list_tasks(db: AsyncSession = Depends(get_db)):
#     return await task_crud.get_tasks_with_done(db)


@router.post("/tasks/create", response_model=task_schema.TaskCreateResponse)
async def create_task(
    task_body: task_schema.TaskCreate, db: AsyncSession = Depends(get_db)
):
    return await task_crud.create_task(db, task_body)


@router.put("/tasks/{task_id}/rename", response_model=task_schema.TaskCreateResponse)
async def rename_task(
    task_id: uuid.UUID, task_body: task_schema.TaskRename, db: AsyncSession = Depends(get_db)
):
    task = await task_crud.get_task(db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    
    return await task_crud.rename_task(db, task_body, original=task)


@router.put("/tasks/{task_id}/explain", response_model=task_schema.TaskExplainResponse)
async def update_task_explain(
    task_id: uuid.UUID, task_body: task_schema.TaskExplainUpdate, db: AsyncSession = Depends(get_db)
):
    task = await task_crud.get_task(db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    
    return await task_crud.update_task_explain(db, task_body, original=task)


@router.put("/tasks/{task_id}/done", response_model=task_schema.TaskIsDoneResponse)
async def update_is_done(
    task_id: uuid.UUID, task_body: task_schema.TaskIsDone, db: AsyncSession = Depends(get_db)
):
    task = await task_crud.get_task(db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    
    return await task_crud.update_is_done(db, task_body, task)


@router.delete("/tasks/{task_id}", response_model=None)
async def delete_task(
    task_id: uuid.UUID, db: AsyncSession = Depends(get_db)
    ) -> None:
    task = await task_crud.get_task(db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    
    return await task_crud.delete_task(db, original=task)