from sqlalchemy import Column, Integer, String  # type: ignore
# from app.db.db_setup import Base
from .mixins import Timestamp


class CategoryClass(Timestamp):
    __tablename__ = "category"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(256))
    description = Column(String(256))
