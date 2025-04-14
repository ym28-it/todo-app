from sqlalchemy import Column, String, Boolean, Integer, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.models.base import Base
import uuid

class TodoTask(Base):
    __tablename__ = "todo_tasks"

    task_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    list_id = Column(UUID(as_uuid=True), ForeignKey("todo_lists.list_id"), nullable=False)
    task_name = Column(String, nullable=False)
    complete_flag = Column(Boolean, default=False)
    task_explain = Column(String)
    time_stamp = Column(Integer)

    todo_list = relationship("TodoList", backref="todo_tasks")