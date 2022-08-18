from sqlalchemy import Column, Integer, ForeignKey, ARRAY  # type: ignore
from app.db.db_configuration import Base
from .mixins import Timestamp
from sqlalchemy.orm import relationship  # type: ignore


class CartClass(Timestamp, Base):
    __tablename__ = "cart"
    id = Column(Integer, primary_key=True, index=True)
    item_id = Column(Integer, ForeignKey("item.id"), nullable=True)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=True)
    
    parent_item = relationship("ItemClass", backref="cart")
    parent_user = relationship("UserClass", backref="cart")
