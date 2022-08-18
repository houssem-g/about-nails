import logging
import sqlalchemy.orm as orm  # type: ignore
from sqlalchemy import create_engine  # type: ignore
from sqlalchemy.ext.declarative import declarative_base  # type: ignore
from sqlalchemy_utils import create_database, database_exists  # type: ignore
import sqlalchemy
from app.db.config import settings # import user_name, password, host_name, port_number, db_name
# connection_str = 'postgresql+psycopg2://postgres:admin@localhost:5432/andb'
# connection_str = f'postgresql+psycopg2://{settings.user_name}:{settings.password}@{settings.host_name}:{settings.port_number}/{settings.db_name}' 


# args = {
#     "sslcert": "home/houssem/.postgresql/client-cert.pem",
#     "sslkey": "home/houssem/.postgresql/client-key.pem",
#     "sslrootcert": "home/houssem/.postgresql/ca-cert.pem",
#     "sslmode": "disable",
# }

def get_engine(user, passwd, host, port, database):
    """
    this function is here to check if the database exist
    and if not to create a new one.
    """
    # [DB_TYPE]+[DB_CONNECTOR]://[USERNAME]:[PASSWORD]@[HOST]:[PORT]/[DB_NAME]
    SQLALCHEMY_DATABASE_URL = "postgresql+psycopg2://{}:{}@{}:{}/{}?sslmode=disable".format(
        user, passwd, host, port, database
    )
    if not database_exists(SQLALCHEMY_DATABASE_URL):
        create_database(SQLALCHEMY_DATABASE_URL)
    else:
        message = "As user {} you're interacting with the database {}".format(user, database)
        logging.warning(message)
    engine = create_engine(SQLALCHEMY_DATABASE_URL)

    return engine


Base = declarative_base()
engine = get_engine(settings.user_name, settings.password, settings.host_name, settings.port_number, settings.db_name)
conn = engine.connect()
# print("test : ", conn.connection.connection.info.ssl_in_use)
# Verify that the engine was created successfully.
if engine.url.database != settings.db_name:
    raise Exception(
        "something went wrong with database creation, please check the secret file used by create_database function"
    )


def get_session(engine):
    """
    function to open a new session
    """
    session: orm.Session = orm.sessionmaker(autocommit=False, autoflush=False, bind=engine)()
    return session


SessionLocal = get_session(engine)

