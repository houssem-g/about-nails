from typing import List, Union

from pydantic import EmailStr
from sqlalchemy import inspect  # type: ignore
from sqlalchemy.engine.reflection import Inspector  # type: ignore
from sqlalchemy.schema import (  # type: ignore
    DropConstraint,
    DropTable,
    ForeignKeyConstraint,
    MetaData,
    Table,
)

# from app.api.utils.users import create_new_user
# from app.core.schemas.users import UserCreate
from app.db.db_configuration import Base, SessionLocal, engine
from app.db.models.cart import CartClass
from app.db.models.category import CategoryClass
from app.db.models.item import ItemClass
from app.db.models.model import ModelClass
from app.db.models.order_details import OrderDetailsClass
from app.db.models.payment import PaymentClass
from app.db.models.product_inventory import ProductInventoryClass
from app.db.models.product import ProductClass
from app.db.models.review import ReviewClass
from app.db.models.shipping_costs import shippingCostClass
from app.db.models.tag import TagClass
from app.db.models.user import UserClass

DB_MODELS = [
    CartClass,
    CategoryClass,
    ItemClass,
    ModelClass,
    OrderDetailsClass,
    PaymentClass,
    ProductInventoryClass,
    ProductClass,
    ReviewClass,
    shippingCostClass,
    TagClass,
    UserClass
    ]


class TableManager:
    """
    This class is to manage the tables in our DB by doing action like create, delete or check
    """

    def __init__(self):
        """
        Args:
            table (_type_): the name of table
            tableModel (_type_): the model created for this table
        """
        self.session = SessionLocal

    async def create_all_tables(self):
        """create table on DB

        Args:
            table (string): this is the name of table that we are going to create
            tableModel (string): the model associated to the table
        """
        Base.metadata.create_all(bind=engine)
        self.session.commit()
        self.session.close()

        all_tables = sorted(self.get_all_tables_names())

        # on_admin_user = UserCreate(email=on_admin_email, username=on_admin_username, password=on_admin_password)

        # response = await create_new_user(self.session, on_admin_user, on_admin_flag=True)
        print(f"Tables {all_tables} created with success!")
        return f"Tables {all_tables} created with success!" #  , response

    async def delete_all_tables(self):
        connection = engine.connect()
        transaction = connection.begin()
        inspector: Inspector = inspect(engine)

        # We need to re-create a minimal metadata with only the required things to
        # successfully emit drop constraints and tables commands for postgres (based
        # on the actual schema of the running instance)
        meta = MetaData()
        tables = []
        all_fkeys = []

        for table_name in inspector.get_table_names():
            fkeys = []

            for fkey in inspector.get_foreign_keys(table_name):
                if not fkey["name"]:
                    continue

                fkeys.append(ForeignKeyConstraint((), (), name=fkey["name"]))

            tables.append(Table(table_name, meta, *fkeys))
            all_fkeys.extend(fkeys)

        for fkey in all_fkeys:
            connection.execute(DropConstraint(fkey))

        for table in tables:
            connection.execute(DropTable(table))

        transaction.commit()

    def get_all_tables_names(self):
        list_tables_in_db: List[str] = []
        metadata = MetaData()
        metadata.reflect(bind=engine)
        for tab in metadata.sorted_tables:
            list_tables_in_db.append(str(tab))
        
        return list_tables_in_db

    def get_table(self, table_name) -> Union[Table, None]:

        metadata = MetaData()
        metadata.reflect(bind=engine)
        for tab in metadata.sorted_tables:
            if str(tab) == table_name:
                return tab

        return None
