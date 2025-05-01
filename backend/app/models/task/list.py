import uuid
from sqlalchemy import Column, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import UUID

from app.db.base import Base

class List(Base):
    __tablename__ = "lists"
    __table_args__ = {"extend_existing": True}  # ホットリロードによる二重定義対策　本番では不要

    list_id = Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.user_id"), nullable=False)
    list_name = Column(String, nullable=False)
    list_explain = Column(String, nullable=True)
    create_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    user = relationship("User", back_populates="lists")
    tasks = relationship("Task", back_populates="list", cascade="all, delete", lazy="joined")  # 親テーブルlistを取得した時点で子テーブルtaskも取得
