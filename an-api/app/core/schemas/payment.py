from pydantic import BaseModel


class PaymentBase(BaseModel):
    id : int
    order_id : int
    amount : float
    status : str
    discount : str
    payment_type : str

    class Config:
        orm_mode = True