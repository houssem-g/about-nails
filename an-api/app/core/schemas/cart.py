from pydantic import BaseModel


class CartBase(BaseModel):
    id : int
    item_id : list(int)
    user_id : int


    class Config:
        orm_mode = True




