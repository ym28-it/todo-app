import uuid
from pydantic import BaseModel, ConfigDict

class DoneResponse(BaseModel):
    id: uuid.UUID

    model_config = ConfigDict(from_attributes=True)