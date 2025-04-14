from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.models.base import Base
import uuid

class TodoList(Base):
    __tablename__ = "todo_lists"

    list_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.user_id"), nullable=False)
    list_name = Column(String, nullable=False)
    list_explain = Column(String)

    user = relationship("User", backref="todo_lists")