from pydantic import BaseModel
from datetime import datetime


class OrderDetailsBase(BaseModel):
    id : int
    payment_id :int
    user_id : int
    item_id : int
    order_number : int
    delivery_status : int
    quantity : int 
    order_date : datetime
    suivi_id : int 

    class Config:
        orm_mode = True