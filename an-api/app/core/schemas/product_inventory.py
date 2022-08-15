from pydantic import BaseModel


class ProductInventoryBase(BaseModel):
    id : int
    stock : int

    class Config:
        orm_mode = True