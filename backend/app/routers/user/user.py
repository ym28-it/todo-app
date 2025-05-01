import uuid
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

import app.schemas.user.user as user_schema
import app.crud.user.user as user_crud
from app.db.db import get_db
from app.utils.auth import verify_password


router = APIRouter()


@router.post("/users/create", response_model=user_schema.UserCreateResponse, status_code=status.HTTP_201_CREATED)
async def create(user: user_schema.UserCreate, db: AsyncSession = Depends(get_db)):
    done = await user_crud.get_user_by_email(db, user.email)
    if done is not None:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    return await user_crud.create_user(db, user=user)


@router.get("/users/{user_id}", response_model=user_schema.UserCreateResponse)
async def read_user(user_id: uuid.UUID, db: AsyncSession = Depends(get_db)):
    done = await user_crud.get_user_by_id(db, user_id)
    if done is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return done


@router.post("/users/login", response_model=user_schema.LogInResponse)
async def log_in(login_info: user_schema.LogIn, db: AsyncSession = Depends(get_db)):
    user = await user_crud.get_user_by_email(db, login_info.email)
    if user is None or not verify_password(login_info.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return user_schema.LogInResponse(user_id=user.user_id)


@router.put("/users/{user_id}/rename", response_model=user_schema.RenameUserNameResponse)
async def rename_user_name(user_id: uuid.UUID, new_name: user_schema.RenameUserName, db: AsyncSession = Depends(get_db)):
    user = await user_crud.get_user_by_id(db, user_id=user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return await user_crud.rename_user_name(db, new_name, original=user)


@router.delete("/users/{user_id}", response_model=None)
async def delete_user(login_info: user_schema.LogIn, db: AsyncSession = Depends(get_db)):
    user = await user_crud.get_user_by_email(db, login_info.email)
    if user is None or not verify_password(login_info.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    return await user_crud.user_delete(db, user)