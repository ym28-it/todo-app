import uuid
from pydantic import BaseModel


class UserCreate(BaseModel):
    user_name: str
    email: str
    password: str


class UserPasswordUsage(BaseModel):
    password_usage: bool


class LogIn(BaseModel):
    email: str
    password: str


class RenameUserName(BaseModel):
    user_name: str


class UserCreateResponse(UserCreate):
    user_id: uuid.UUID

    class Config:
        orm_mode = True


class UserPasswordUsageResponse(UserPasswordUsage):
    user_id: uuid.UUID

    class Config:
        orm_mode = True


class LogInResponse(LogIn):
    user_id: uuid.UUID

    class Config:
        orm_mode = True


class RenameUserNameResponse(RenameUserName):
    user_id: uuid.UUID

    class Config:
        orm_mode = True