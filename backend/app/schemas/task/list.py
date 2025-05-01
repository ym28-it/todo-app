import uuid
from typing import Optional
from pydantic import BaseModel, Field, ConfigDict


class ListBase(BaseModel):
    list_name: Optional[str] = Field(None, example="買い物")


class ListCreate(ListBase):
    user_id: uuid.UUID
    pass


class ListRename(ListBase):
    list_name: str = Field(None, example="新しい名前")


class ListExplainUpdate(BaseModel):
    list_explain: str = Field(None, example="タスクの説明")


class ListCreateResponse(ListCreate):
    list_id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)

class ListRenameResponse(ListRename):
    list_id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)

class ListExplainResponse(ListExplainUpdate):
    list_id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)