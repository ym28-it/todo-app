from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.schemas.user.user import UserCreate, UserRead
from app.crud.user.user import create_user, get_user_by_id
from app.main import get_db

router = APIRouter()

@router.post("/users/", response_model=UserRead)
def create(user: UserCreate, db: AsyncSession = Depends(get_db)):
    return create_user(db, user)

@router.get("/users/{user_id}", response_model=UserRead)
def read_user(user_id: int, db: AsyncSession = Depends(get_db)):
    return get_user_by_id(db, user_id)