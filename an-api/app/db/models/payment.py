from sqlalchemy import Column, Integer, ForeignKey, Float, String  # type: ignore
# from app.db.db_setup import Base
from .mixins import Timestamp
from sqlalchemy.orm import relationship  # type: ignore


class PaymentClass(Timestamp):
    __tablename__ = "payment"
    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("order_details.id"), nullable=True)
    amount = Column(Float)
    status = Column(String(256))
    discount = Column(String(256))
    payment_type = Column(String(256))
    
    parent_order_details = relationship("orderDetailsClass", backref="payment")
