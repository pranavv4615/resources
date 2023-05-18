LOAD DATA LOCAL INFILE '/Users/incred/Documents/teaching_resources/data/departments.csv' INTO TABLE departments FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;


LOAD DATA LOCAL INFILE '/Users/incred/Documents/teaching_resources/data/employees.csv' INTO TABLE employees FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;


LOAD DATA LOCAL INFILE '/Users/incred/Documents/teaching_resources/data/dept_emp.csv' INTO TABLE dept_emp FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;


LOAD DATA LOCAL INFILE '/Users/incred/Documents/teaching_resources/data/dept_manager.csv' INTO TABLE dept_manager FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;


LOAD DATA LOCAL INFILE '/Users/incred/Documents/teaching_resources/data/titles.csv' INTO TABLE titles FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;


LOAD DATA LOCAL INFILE '/Users/incred/Documents/teaching_resources/data/salaries.csv' INTO TABLE salaries FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;