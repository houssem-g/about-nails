from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import (route_homepage)

app = FastAPI(
    title="about-nails API",
    description="This API lets you interact with the about-nails ecosystem.",
    version="0.0.1",
    contact={
        "name": "about-nails",
        "email": "info@about-nails.com",
    },
    license_info={
        "name": "CC-BY-3.0",
    },
)

origins = [

    "http://localhost:3000",
    "http://localhost:8000",
    "https://app.about-nails.com",
    "https://api.about-nails.com",
    "https://wallet.about-nails.com",
    "http://0.0.0.0:8000",
    "http://0.0.0.0:3000",
    "http://157.245.64.39:8000",
    "http://157.245.64.39:3000",

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "test api"}

app.include_router(route_homepage.router)
# app.include_router(route_brands.router)
# app.include_router(route_rights.router)
# app.include_router(route_roles.router)
# app.include_router(route_items.router)
# app.include_router(route_categories.router)
# app.include_router(route_items_classes.router)
# app.include_router(route_items_configurations.router)
# app.include_router(route_user_has_roles.router)
