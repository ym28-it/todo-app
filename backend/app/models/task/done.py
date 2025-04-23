from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.db.base import Base

class Done(Base):
    __tablename__ = "dones"
    __table_args__ = {"extend_existing": True}  # ホットリロードによる二重定義対策　本番では不要

    id = Column(Integer, ForeignKey("tasks.id"), primary_key=True)

    task = relationship("Task", back_populates="done")