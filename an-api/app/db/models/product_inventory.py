from sqlalchemy import Column, Integer, String  # type: ignore
from app.db.db_configuration import Base
from .mixins import Timestamp
from sqlalchemy.orm import relationship  # type: ignore


class ProductInventoryClass(Timestamp, Base):
    __tablename__ = "product_inventory"
    id = Column(Integer, primary_key=True, index=True)
    stock = Column(Integer)
