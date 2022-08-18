from sqlalchemy import Boolean, Column, Enum, Integer, String, Text  # type: ignore
from sqlalchemy_utils import URLType  # type: ignore

# from app.core.schemas.users import UserTypes
from app.db.db_configuration import Base

from .mixins import Timestamp


class UserClass(Timestamp, Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    # user_type = Column(Enum(UserTypes), default=UserTypes.SIMPLE_USER)
    firstname = Column(String(256), default="")
    lastname = Column(String(256), default="")
    username = Column(String(100), nullable=False, unique = True)
    address = Column(String(256), nullable=False)
    city = Column(String(100), nullable=False)
    country = Column(String(100), nullable=False)
    email = Column(String(256), index=True, nullable=False, unique = True)
    hashed_password = Column(String(256), nullable=False)
    salt = Column(String(256), nullable=False)
    phone_number = Column(String(256), default="")
    description = Column(String(256), default="")
    is_active = Column(Boolean, default=False)
