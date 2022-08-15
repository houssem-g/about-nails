from pydantic import BaseModel


class CategoryBase(BaseModel):
    id : int
    name : str
    description : str


    class Config:
        orm_mode = True




