from typing import List

from app.db.models.product import ProductClass
from fastapi import HTTPException
from sqlalchemy.orm import Session  # type: ignore
from starlette.status import HTTP_200_OK


async def get_all_products(db: Session) -> List[ProductClass]:
    res = db.query(ProductClass).all()
    return res
