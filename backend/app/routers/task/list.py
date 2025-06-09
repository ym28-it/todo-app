import uuid
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

import app.schemas.task.list as list_schema
import app.crud.task.list as list_crud
from app.db.db import get_db


router = APIRouter()


@router.get("/lists/{user_id}", response_model=List[list_schema.ListGetResponse])
async def get_lists_by_user_id(
    user_id: uuid.UUID, db: AsyncSession = Depends(get_db)
):
    lists = await list_crud.get_lists_by_user_id(db, user_id=user_id)
    if lists is None:
        raise HTTPException(status_code=404, detail="Lists not found")
    return lists


@router.post("/lists/create", response_model=list_schema.ListCreateResponse)
async def create_list(
    list_body: list_schema.ListCreate, db: AsyncSession = Depends(get_db)
):
    return await list_crud.create_list(db, list_body)


@router.put("/lists/{list_id}/rename", response_model=list_schema.ListRenameResponse)
async def rename_list(
    list_id: uuid.UUID, list_body: list_schema.ListRename, db: AsyncSession = Depends(get_db)
):
    list = await list_crud.get_list(db, list_id=list_id)
    if list is None:
        raise HTTPException(status_code=404, detail="List not found")
    
    return await list_crud.rename_list(db, list_body, original=list)


@router.put("/lists/{list_id}/explain", response_model=list_schema.ListExplainResponse)
async def update_list_explain(
    list_id: uuid.UUID, list_body: list_schema.ListExplainUpdate, db: AsyncSession = Depends(get_db)
):
    list = await list_crud.get_list(db, list_id=list_id)
    if list is None:
        raise HTTPException(status_code=404, detail="List not found")
    
    return await list_crud.update_list_explain(db, list_body, list)


@router.delete("/lists/{list_id}", response_model=None)
async def delete_list(list_id: uuid.UUID, db: AsyncSession = Depends(get_db)):
    list = await list_crud.get_list(db, list_id=list_id)
    if list is None:
        raise HTTPException(status_code=404, detail="List not found")
    
    return await list_crud.delete_list(db, list)