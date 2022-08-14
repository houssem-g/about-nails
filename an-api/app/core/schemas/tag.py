from pydantic import BaseModel


class TagBase(BaseModel):
    id : int
    name : str
    color : str


    class Config:
        orm_mode = True




