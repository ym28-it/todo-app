import uuid
from pydantic import BaseModel, ConfigDict


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

    model_config = ConfigDict(from_attributes=True)


class UserPasswordUsageResponse(UserPasswordUsage):
    user_id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


class LogInResponse(BaseModel):
    user_id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


class RenameUserNameResponse(RenameUserName):
    user_id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)