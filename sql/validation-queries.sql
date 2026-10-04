-- 1. Find a user's name by email
SELECT Name
FROM Users
WHERE Email = 'test@example.com';


-- 2. Retrieve all orders for UserID 123
SELECT *
FROM Orders
WHERE UserID = 123;


-- 3. Retrieve order details for UserID 123
SELECT Orders.Product, Orders.Quantity, Orders.Total
FROM Users
INNER JOIN Orders
ON Users.UserID = Orders.UserID
WHERE Users.UserID = 123;
