from tokenize import Double
from pydantic import BaseModel


class ItemBase(BaseModel):
    id : int
    price : float
    stock_id : int
    product_id : int

    class Config:
        orm_mode = True