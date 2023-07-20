ALTER TABLE user RENAME COLUMN userage to age;
ALTER TABLE user MODIFY COLUMN username varchar(255);
ALTER TABLE user ADD COLUMN gender varchar(20);
ALTER TABLE user ADD PRIMARY KEY(userid);
ALTER TABLE employee ADD foreign key(salary_id) references salary(salary_id);


update user set userid=2 where username="vipin";
update user set age=24 where userid=2;