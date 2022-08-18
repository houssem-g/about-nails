from sqlalchemy import Column, ForeignKey, Integer, String  # type: ignore
from sqlalchemy.orm import relationship  # type: ignore
from app.db.db_configuration import Base
from .mixins import Timestamp
# from .brand import Brand  # noqa
# from .category import Category  # noqa


class ProductClass(Timestamp, Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(256))
    description = Column(String(256))
    main_picture = Column(String(256))
    second_picture = Column(String(256))
    third_picture = Column(String(256))
    forth_picture = Column(String(256))
    fith_picture = Column(String(256))
    main_video = Column(String(256))
    stock_id = Column(Integer, ForeignKey("product_inventory.id"), nullable=True)
    model_id = Column(Integer, ForeignKey("model.id"), nullable=True)
    category_id  = Column(Integer, ForeignKey("category.id"), nullable=True) 
    tag_id = Column(Integer, ForeignKey("tag.id"), nullable=True) 

    
    parent_tag = relationship("TagClass", backref="product")
    parent_category = relationship("CategoryClass", backref="product")
    parent_model = relationship("ModelClass", backref="product")
    parent_product_inventory = relationship("ProductInventoryClass", backref="product")


# to check : https://docs.sqlalchemy.org/en/14/orm/relationships.html
