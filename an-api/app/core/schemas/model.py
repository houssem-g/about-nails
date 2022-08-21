from pydantic import BaseModel


class ModelBase(BaseModel):
    id : int
    name : str

    class Config:
        orm_mode = True