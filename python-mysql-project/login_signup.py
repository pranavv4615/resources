import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="users_database"
)

cursor = connection.cursor()

user_id = 4
username =  "Revathi"
password = "rev@5321"

cursor.execute(f"SELECT * FROM users WHERE username = '{username}'")
result = cursor.fetchall()
print("result: ", result)

if len(result) == 0:
    # Insert this data into the table (users)
    cursor.execute(f"INSERT INTO users (user_id, username, password) VALUES ({user_id}, '{username}', '{password}')")
    connection.commit()
else:
    # Case 1: Password matches
    if result[0][2] == password:
        print("Login Successful")
    else:
        print("Login Failed")

    

