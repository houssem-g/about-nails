#!/usr/bin/python
import os, subprocess


if __name__ == "__main__":
    d = dict(os.environ)
    d["HOST_NAME"]="localhost"
    d["PORT_NUMBER"]="5432"
    d["USER_NAME"]="postgres"
    d["PASSWORD"]="admin"
    d["DB_NAME"]="andb"
    d["JWT_SECRET"]="TEST_SECRET_DO_NOT_USE_IN_PROD"
    d["ALGORITHM"]="HS256"
    # 60 minutes * 24 hours * 8 days = 8 days = 11522
    d["ACCESS_TOKEN_EXPIRE_MINUTES"]="11522"
    d["EMAIL_HOST"]="trouvetondeal@gmail.com"
    d["EMAIL_PASSWORD"]="bsujncgstrdrjcma"
    d["EMAIL_PORT"]="587"
    d["EMAIL_USERNAME"]="trouvetondeal@gmail.com"
    d["EMAIL_FROM"]="trouvetondeal@gmail.com"
    
    subprocess.Popen(cmd, shell=True, env=d).wait()
    print("*******************************", os.environ.get("USER_NAME"))