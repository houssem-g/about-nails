from app.db.tables_definition import TableManager
import asyncio


async def run_table_creation():
    obj = TableManager()
    await obj.create_all_tables()
    # await obj.delete_all_tables()


def main():
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run_table_creation())

'''
Dont forget to start the database by running this command : sudo service postgresql start
'''
if __name__ == "__main__":
    main()