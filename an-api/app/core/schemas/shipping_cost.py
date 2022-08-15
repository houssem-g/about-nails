from pydantic import BaseModel


class ShippingCostBase(BaseModel):
    id : int
    city : str
    country : str
    delivery_price : float


    class Config:
        orm_mode = True




