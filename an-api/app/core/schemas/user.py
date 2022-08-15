from xmlrpc.client import Boolean
from pydantic import BaseModel


class UserBase(BaseModel):
    id : int
    firstname : str
    lastname : str
    username : str
    address : str
    city : str
    country : str
    email : str
    hashed_password : str
    salt : str
    phone_number : str
    description : str
    is_active : bool


    class Config:
        orm_mode = True




