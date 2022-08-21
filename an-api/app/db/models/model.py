from sqlalchemy import Column, Integer, String  # type: ignore
from .mixins import Timestamp
from app.db.db_configuration import Base


class ModelClass(Timestamp, Base):
    __tablename__ = "model"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(256))
