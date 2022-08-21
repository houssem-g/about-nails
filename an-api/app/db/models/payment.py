from sqlalchemy import Column, Integer, Float, String  # type: ignore
from app.db.db_configuration import Base
from .mixins import Timestamp


class PaymentClass(Timestamp, Base):
    __tablename__ = "payment"
    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Float)
    status = Column(String(256))
    discount = Column(String(256))
    payment_type = Column(String(256))
    