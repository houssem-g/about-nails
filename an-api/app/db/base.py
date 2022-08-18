
from app.db.db_configuration import engine, get_session


def get_db():
    db = get_session(engine)
    try:
        yield db
    finally:
        db.close()

