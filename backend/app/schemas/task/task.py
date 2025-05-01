import uuid
from typing import Optional
from pydantic import BaseModel, Field, ConfigDict


class TaskBase(BaseModel):
    task_name: Optional[str] = Field(None, example="納豆を買う")


class TaskCreate(TaskBase):
    list_id: uuid.UUID


class TaskRename(TaskBase):
    task_name: str = Field(None, example="新規名")


class TaskExplainUpdate(BaseModel):
    task_explain: str = Field(None, example="説明")


class TaskIsDone(BaseModel):
    is_done: bool


class TaskCreateResponse(TaskCreate):
    task_id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


class TaskRenameResponse(TaskRename):
    task_id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


class TaskExplainResponse(TaskExplainUpdate):
    task_id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


class TaskIsDoneResponse(TaskIsDone):
    task_id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)


class Task(TaskBase):
    task_id: uuid.UUID
    done: bool = Field(False, description="完了フラグ")

    model_config = ConfigDict(from_attributes=True)