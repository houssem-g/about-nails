from typing import List

import fastapi
from app.api.utils.homepage import get_all_products
# from app.api.utils.users import get_current_user
# from app.core.schemas.brand import BrandBase
from app.db.base import get_db
# from app.db.models.users import User, UserTypes
# from fastapi import HTTPException
from sqlalchemy.orm import Session  # type: ignore
# from starlette.status import HTTP_200_OK

router = fastapi.APIRouter()


@router.get("/v1/products")
async def get_all_products_route(db: Session = fastapi.Depends(get_db)):
    all_products = await get_all_products(db)
    return all_products


# @router.get("/v1/brands/{brand_name}", dependencies=[fastapi.Depends(get_current_user)], response_model=BrandBase)
# async def get_brand_from_name_route(brand_name: str, db: Session = fastapi.Depends(get_db)):
#     brand = await get_brand_from_name(db, brand_name)
#     return brand


# @router.post("/v1/brands", dependencies=[fastapi.Depends(get_current_user)], response_model=BrandBase)
# async def create_brand_route(
#     brand: BrandBase, db: Session = fastapi.Depends(get_db), current_user: User = fastapi.Depends(get_current_user)
# ):
#     if current_user.user_type == UserTypes.ON_ADMIN:
#         brand = await create_brand(brand=brand, db=db)
#         return brand
#     else:
#         raise HTTPException(status_code=HTTP_200_OK, detail="you do not have the right to create a brand")
