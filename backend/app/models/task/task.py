import uuid
from sqlalchemy import Column, String, ForeignKey, DateTime, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import UUID

from app.db.base import Base

class Task(Base):
    __tablename__ = "tasks"
    __table_args__ = {"extend_existing": True}  # ホットリロードによる二重定義対策　本番では不要

    task_id = Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid.uuid4)
    list_id = Column(UUID(as_uuid=True), ForeignKey("lists.list_id"), nullable=False)
    task_name = Column(String(1024))
    task_explain = Column(String, nullable=True)
    is_done = Column(Boolean, default=False)
    create_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    list = relationship("List", back_populates="tasks")
    # done = relationship("Done", back_populates="task", cascade="all, delete", lazy="select")    # 親テーブルtaskを取得した時点では子テーブルdoneは不要なのでselect

