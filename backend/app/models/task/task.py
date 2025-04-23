from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.db.base import Base

class Task(Base):
    __tablename__ = "tasks"
    __table_args__ = {"extend_existing": True}  # ホットリロードによる二重定義対策　本番では不要

    id = Column(Integer, primary_key=True)
    title = Column(String(1024))

    done = relationship("Done", back_populates="task", cascade="delete")

