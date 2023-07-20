import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="python_mysql"
)

cursor = connection.cursor()

id = 1
username =  "pranav"
password = "abc@1234"

cursor.execute(f"SELECT * FROM users WHERE username = '{username}'")
result = cursor.fetchall()
print("result: ", result)

if len(result) == 0:
    #user doesnot exit in the database table
    # Insert this data into the table (users)
    cursor.execute(f"INSERT INTO users (id, username, password) VALUES ({id}, '{username}', '{password}')")
    connection.commit()
else:
    #User exist in database table
    # Case 1: Password matches
    if result[0][2] == password:
        print("Login Successful")
    else:
        print("Login Failed")

    

#create a table students
#student will be having field as student_id(int, primary_key), student_name varchar, student_school_name varchar, student_father_name varchar, student_age
#filters:
#const student_name = "pranav";
# cursor.execute(f"SELECT * FROM students WHERE student_name = '{student_name}'")
#const student_age = 18
# cursor.execute(f"SELECT * FROM students WHERE student_age = '{student_age}'")
#const student_school_name = "abc school"
# cursor.execute(f"SELECT * FROM students WHERE student_school_name = '{student_school_name}'")

