from sqlalchemy import Column, Integer, String, ForeignKey  # type: ignore
# from app.db.db_setup import Base
from .mixins import Timestamp
from sqlalchemy.orm import relationship  # type: ignore


class ReviewClass(Timestamp):
    __tablename__ = "review"
    id = Column(Integer, primary_key=True, index=True)
    rating = Column(Integer)
    comment = Column(String(256))
    review_by =  Column(Integer, ForeignKey("user.id"), nullable=True) 
    model_id =  Column(Integer, ForeignKey("model.id"), nullable=True)
    
    parent_model = relationship("ModelClass", backref="review")
    parent_user = relationship("UserClass", backref="review")