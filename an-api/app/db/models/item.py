from sqlalchemy import Column, Integer, ForeignKey, Float  # type: ignore
# from app.db.db_setup import Base
from .mixins import Timestamp
from sqlalchemy.orm import relationship  # type: ignore


class ItemClass(Timestamp):
    __tablename__ = "item"
    id = Column(Integer, primary_key=True, index=True)
    price = Column(Float)
    stock_id = Column(Integer, ForeignKey("product_inventory.id"), nullable=True) 
    product_id = Column(Integer, ForeignKey("product.id"), nullable=True) 

    parent_product = relationship("ProductClass", backref="item")
    parent_product_inventory = relationship("ProductInventoryClass", backref="item")