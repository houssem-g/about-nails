from sqlalchemy import Column, Integer, ForeignKey, Float, String  # type: ignore
# from app.db.db_setup import Base
from .mixins import Timestamp
from sqlalchemy.orm import relationship  # type: ignore


class shippingCostClass(Timestamp):
    __tablename__ = "shipping_cost"
    id = Column(Integer, primary_key=True, index=True)
    city = Column(String(100), nullable=False)
    country = Column(String(100), nullable=False)
    delivery_price = Column(Float)

    
