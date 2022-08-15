from sqlalchemy import Column, Integer, ForeignKey, Date, ARRAY,String  # type: ignore
# from app.db.db_setup import Base
from .mixins import Timestamp
from sqlalchemy.orm import relationship  # type: ignore


class OrderDetailsClass(Timestamp):
    __tablename__ = "order_details"
    id = Column(Integer, primary_key=True, index=True)
    payment_id = Column(Integer, ForeignKey("payment.id"), nullable=True)
    user_id = Column(ARRAY(Integer), ForeignKey("user.id"), nullable=True)
    item_id = Column(ARRAY(Integer), ForeignKey("item.id"), nullable=True)
    order_number = Column(Integer)
    delivery_status = Column(String(256))
    quantity = Column(Integer) 
    order_date = Column(Date)
    suivi_id = Column(Integer) 
    
    parent_item = relationship("ItemClass", backref="order_details")
    parent_payment = relationship("PaymentClass", backref="order_details")
