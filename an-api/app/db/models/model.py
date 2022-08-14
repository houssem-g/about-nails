from sqlalchemy import Column, Integer, String  # type: ignore
# from app.db.db_setup import Base
from .mixins import Timestamp


class ModelClass(Timestamp):
    __tablename__ = "model"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(256))
