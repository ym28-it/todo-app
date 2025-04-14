from sqlalchemy import Column, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from app.models.base import Base

class UserSettings(Base):
    __tablename__ = "user_settings"

    user_id = Column(UUID(as_uuid=True), ForeignKey("users.user_id"), primary_key=True)
    user_name = Column(String, nullable=False)
    usage_password = Column(Boolean, default=False)
    password = Column(String, nullable=True)

    user = relationship("User", backref="settings")