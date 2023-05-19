DELIMITER & & CREATE PROCEDURE get_merit_student () BEGIN
SELECT
  *
FROM
  users
WHERE
  username = 'pranav';


END & & DELIMITER;