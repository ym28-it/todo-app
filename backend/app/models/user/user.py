import uuid
from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import UUID
from app.db.base import Base

class User(Base):
    __tablename__ = "users"
    __table_args__ = {"extend_existing": True}  # ホットリロードによる二重定義対策　本番では不要

    user_id = Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid.uuid4)
    user_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password_usage = Column(Boolean, nullable=False, default=True)
    password = Column(String, unique=True, nullable=False)   # ハッシュ化必須　そのまま保存はしない
    create_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    # user 1 -- * list
    # UserはListと双方向で1対多対応
    lists = relationship("List", back_populates="user", cascade="all, delete", lazy="joined")   # userテーブルを取得した時点で子テーブルlistも取得