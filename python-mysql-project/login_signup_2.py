import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="python_mysql"
)

cursor = connection.cursor()

username = "pranav"
password = "abc@1234"

cursor.execute(f"SELECT * FROM users where username='{username}'")

result = cursor.fetchall()
if len(result) == 0:
    print("please signup, you dont exist in out database")
else:
    cursor.execute(f"SELECT * FROM users where username='{username}' and password='{password}'")
    result = cursor.fetchall()
    if len(result) == 0:
        print("oops! password is incorrect")
    else:
        print("login successfull, Welcome back")



