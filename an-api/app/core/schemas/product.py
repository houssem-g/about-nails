from datetime import datetime

from pydantic import BaseModel


class ProductBase(BaseModel):
    id : int
    title : str
    stock_id : int
    model_id : int
    category_id  : int
    tag_id : int
    description : str
    main_picture : str
    second_picture : str
    third_picture : str
    forth_picture : str
    fith_picture : str
    main_video : str

    class Config:
        orm_mode = True




