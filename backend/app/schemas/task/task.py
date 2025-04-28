import uuid
from typing import Optional
from pydantic import BaseModel, Field


class TaskBase(BaseModel):
    task_name: Optional[str] = Field(None, example="納豆を買う")


class TaskCreate(TaskBase):
    list_id: uuid.UUID
    pass


class TaskRename(TaskBase):
    task_name: str = Field(None, example="新規名")


class TaskExplainUpdate(TaskBase):
    task_explain: str = Field(None, example="説明")


class TaskIsDone(TaskBase):
    is_done: bool


class TaskCreateResponse(TaskCreate):
    task_id: uuid.UUID

    class Config:
        orm_mode = True


class TaskRenameResponse(TaskRename):
    task_id: uuid.UUID

    class Config:
        orm_mode = True


class TaskExplainResponse(TaskExplainUpdate):
    task_id: uuid.UUID

    class Config:
        orm_mode = True


class TaskIsDoneResponse(TaskIsDone):
    task_id: uuid.UUID

    class Config:
        orm_mode = True


class Task(TaskBase):
    task_id: uuid.UUID
    done: bool = Field(False, description="完了フラグ")

    class Config:
        orm_mode = True