from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.schemas.user.user import UserCreate, UserRead
from app.crud.user.user import create_user, get_user_by_id
from app.db.db import get_db

router = APIRouter()

@router.post("/users/", response_model=UserRead, status_code=status.HTTP_201_CREATED)
async def create(user: UserCreate, db: AsyncSession = Depends(get_db)):
    done = await create_user(db, user)
    if done is None:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    return done

@router.get("/users/{user_id}", response_model=UserRead)
async def read_user(user_id: int, db: AsyncSession = Depends(get_db)):
    done = await get_user_by_id(db, user_id)
    if done is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return done