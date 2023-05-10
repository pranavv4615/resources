-- CREATE DATABASE
CREATE DATABASE student_database;
SHOW DATABASES;

-- #USE DATABASE
USE student_database;

-- #CREATE student_personal_details INSIDE THE DATABASE
create table student_personal_details (
    SPD_ID INTEGER(100),
    name VARCHAR(255),
    date_of_birth VARCHAR(30),
	phone_number INTEGER(12),
	email_id VARCHAR(100),
	gender VARCHAR(10),
	weight INTEGER(10),
	height INTEGER(10),
	blood_group VARCHAR(10),
    PRIMARY KEY(SPD_ID)
);
DESCRIBE student_personal_details;

-- #CREATE student_education_details INSIDE THE DATABASE
create table student_education_details (
    SED_ID INTEGER,
    roll INTEGER,
    class INTEGER,
	batch VARCHAR(50),
	department VARCHAR(100),
	school VARCHAR(255),
    PRIMARY KEY(SED_ID)
);
DESCRIBE student_education_details;

-- #CREATE student_family_details INSIDE THE DATABASE
CREATE table student_family_details (
	SFD_ID INTEGER,
    father_name VARCHAR(255),
	mother_name VARCHAR(255),
	address VARCHAR(255),
	no_of_siblings INTEGER,
	uncle_name VARCHAR(255),
	aunt_name VARCHAR(255),
	father_occupation INTEGER,
	mother_occupation INTEGER,
	no_of_family_member INTEGER
);
DESCRIBE student_family_details;

-- #CREATE OCCUPTATION TABLES
CREATE TABLE occupations(
	O_ID INTEGER,
    occupation varchar(255)
);
DESCRIBE occupations;


-- insert the data inside all the tables one by one

-- insert data into student_personal_details

INSERT INTO student_personal_details (SPD_ID, name, date_of_birth, phone_number, email_id, gender, weight, height, blood_group) 
VALUES (1, "RAMESH", "25/07/1994", 766853452, "ramesh@gmail.com", "M", 75, 182, "A+");

INSERT INTO student_personal_details (SPD_ID, name, date_of_birth, phone_number, email_id, gender, weight, height, blood_group) 
VALUES (2, "MAHESH", "10/05/1990", 945853452, "mahesh@gmail.com", "M", 65, 176, "0+");

INSERT INTO student_personal_details (SPD_ID, name, date_of_birth, phone_number, email_id, gender, weight, height, blood_group) 
VALUES (3, "KAMLESH", "12/04/1997", 855853452, "kamlesh@gmail.com", "M", 78, 165, "0-");

INSERT INTO student_personal_details (SPD_ID, name, date_of_birth, phone_number, email_id, gender, weight, height, blood_group) 
VALUES (4, "RIYA", "11/03/1997", 843853452, "riya@gmail.com", "F", 15, 155, "0+");

-- insert data into student_education_details
INSERT INTO students_class_details (SED_ID, roll, class, batch, department,school)
VALUES (1, 2345, 3, 'a', 'Art', 'SGV');
INSERT INTO students_class_details (SED_ID, roll, class, batch, department,school)
VALUES (2, 1345, 4, 'b', 'Science', 'DPS');
INSERT INTO students_class_details (SED_ID, roll, class, batch, department,school)
VALUES (3, 7345, 4, 'a', 'Biology', 'DPS');
-- insert data into student_family_details
INSERT INTO student_family_details (SFD_ID, father_name, mother_name, address, no_of_siblings, uncle_name, aunt_name, father_occupation, mother_occupation, no_of_family_member) 
VALUES (1, "ajeet maheshwari", "kalpana maheshwari", "orissa", 3, "rakesh maheshwari", "sumitra maheshwari", 1, 3, 8);

-- view/filter the data inside a table
SELECT * FROM student_personal_details
select name, phone_number from student_personal_details where weight > 60;
select name, phone_number from student_personal_details where weight < 60;
select name, phone_number from student_personal_details where weight between 60 and 77;
select MAX(weight) from student_personal_details;
select MIN(weight) from student_personal_details;


-- alter table sytax and working:
alter table student_personal_details add age INT;
alter table student_personal_details drop column blood_group;
alter table student_personal_details modify column blood_group varchar(255);

ALTER TABLE student_personal_details ADD PRIMARY KEY (SPD_ID);


-- ********** very important(diffrence between drop and truncate command)
-- it will drop the entire table, including the stucture
DROP TABLE student_personal_details;

-- delete the entire data in the table, without deleting the stucture
TRUNCATE student_personal_details


-- sorting the data in ascending and descending:
select * from student_personal_details order by height ASC;
select * from student_personal_details order by height DESC;
select * from student_personal_details order by weight ASC;

-- limit and offset
select * from student_personal_details limit 2;
select * from student_personal_details limit 3, 2;

-- group by tutorail
select sum(weight) from student_personal_details group by gender order by gender DESC;
select sum(weight) from student_personal_details group by gender;
select sum(weight) from student_personal_details group by gender order by gender ASC;
select avg(weight) from student_personal_details group by gender order by gender ASC;

