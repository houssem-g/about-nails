from pydantic import BaseModel


class ReviewBase(BaseModel):
    id : int
    rating : int
    comment : str
    review_by :  str
    model_id : int

    class Config:
        orm_mode = True