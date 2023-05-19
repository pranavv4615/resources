CREATE TABLE
  Customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    country VARCHAR(50)
  );


INSERT INTO
  Customers (customer_id, name, email, country)
VALUES
  (1, 'John Doe', 'john.doe@example.com', 'USA'),
  (2, 'Jane Smith', 'jane.smith@example.com', 'Canada'),
  (
    3,
    'Mike Johnson',
    'mike.johnson@example.com',
    'USA'
  ),
  (4, 'Emily Brown', 'emily.brown@example.com', 'UK');


CREATE TABLE
  Orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product_name VARCHAR(50),
    quantity INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
  );


INSERT INTO
  Orders (
    order_id,
    customer_id,
    product_name,
    quantity,
    order_date
  )
VALUES
  (1, 1, 'Product A', 2, '2023-04-01'),
  (2, 1, 'Product B', 1, '2023-04-05'),
  (3, 2, 'Product A', 3, '2023-04-02'),
  (4, 3, 'Product C', 5, '2023-04-10'),
  (5, 4, 'Product B', 2, '2023-04-07'),
  (6, 4, 'Product D', 4, '2023-04-08');


--ansewer for question number 1
SELECT
  name,
  email
FROM
  Customers;


SELECT
  name,
  email
FROM
  Customers;


--answer for question number 2
SELECT
  c.name,
  COUNT(o.order_id) AS total_orders
FROM
  Customers c
  JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY
  c.name
ORDER BY
  total_orders DESC;


--answer for question 3
SELECT
  c.name,
  o.product_name,
  o.quantity
FROM
  Customers c
  JOIN Orders o ON c.customer_id = o.customer_id
WHERE
  o.order_date > '2023-01-01';


--answer for question 4
SELECT
  c.name,
  SUM(o.quantity) AS total_quantity
FROM
  Customers c
  JOIN Orders o ON c.customer_id = o.customer_id
WHERE
  c.country = 'USA';


GROUP BY
  c.name;