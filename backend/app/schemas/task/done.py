import uuid
from pydantic import BaseModel

class DoneResponse(BaseModel):
    id: uuid.UUID

    class Config:
        orm_mode = True