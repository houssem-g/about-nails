#!/usr/bin/python
import python_secret
from app.db.tables_creation import TableManager


if __name__ == "__main__":
    TableManager.create_all_tables()