from sqlalchemy import Column, Integer, String  # type: ignore
from app.db.db_configuration import Base
from .mixins import Timestamp


class TagClass(Timestamp, Base):
    __tablename__ = "tag"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(256))
    color = Column(String(256))
