-- Practice 2

-- 1
SELECT CustomerID, Title + ' ' + FirstName + ' ' + LastName + ' (' + City + ')' AS FullName
FROM Customer
WHERE TITLE IS NOT NULL
  AND CITY IS NOT NULL;

-- 2
SELECT CustomerID, Title + ' ' + FirstName + ' ' + LastName + ISNULL(' (' + City + ')', '') AS FullName
FROM Customer
WHERE TITLE IS NOT NULL;

-- 3
SELECT CustomerID, ISNULL(Title + ' ', '') + FirstName + ' ' + LastName + ISNULL(' (' + City + ')', '') AS FullName
FROM Customer;

-- 4
SELECT TOP 1 CustomerID, ISNULL(Title + ' ', '') + FirstName + ' ' + LastName
FROM Customer
ORDER BY LEN(ISNULL(Title + ' ', '') + FirstName + ' ' + LastName) DESC

-- 5
SELECT DISTINCT City
FROM Customer;

-- 6
SELECT FirstName + ' ' + SUBSTRING(LastName, 1, 1) + '.' + ISNULL(' (' + Country + ')', '') AS FullName
FROM Customer;

-- 7
SELECT *
FROM Orders
WHERE OrderDate BETWEEN '2012.02.01' AND '2012.09.30'

-- 8
SELECT *
FROM Orders
WHERE OrderDate BETWEEN '2012.02.01' AND '2012.09.30'
  AND SubTotal > 50000;

-- 9
SELECT ORDERID,
       FORMAT(OrderDate, 'yyyy MMM dd') as OrderDate,
       CUSTOMERID,
       SALESPERSONID,
       SUBTOTAL
FROM Orders
WHERE OrderDate BETWEEN '2012.02.01' AND '2012.09.30'
  AND SubTotal > 50000;

-- 10
SELECT *
FROM Orders
WHERE SalesPersonID IS NULL;

-- 11
SELECT *
FROM Product
WHERE NAME LIKE '%TIRE%'

-- 12
SELECT DISTINCT LEFT(Name, CHARINDEX(' ', Name) - 1)
FROM Product
WHERE NAME LIKE '%TIRE%'

-- 13
SELECT TOP 1 ProductID, Name, ListPrice
FROM Product
WHERE ListPrice > 0
ORDER BY ListPrice

-- 14
SELECT ProductID, Name, ListPrice, ProductSubcategoryID
FROM Product
WHERE Style IS NULL
  AND Class IS NULL
  AND ProductSubcategoryID IN (33, 34, 35)

-- 15
SELECT DISTINCT ProductSubcategoryID
FROM Product;

-- 16
SELECT ProductID, Name, ListPrice, Color, Style
FROM Product
WHERE (Color = 'YELLOW' AND Style = 'W')
   OR (Color = 'BLACK' AND Style = 'M')
   OR (Color = 'BLUE' AND Style = 'U');

-- 17
SELECT ProductID, Name, ListPrice, ListPrice * 1.25 AS NewListPrice
FROM Product
WHERE ListPrice > 0;

-- 18
SELECT ProductID, Name, ListPrice
FROM Product
WHERE NAME NOT LIKE '%FRAME%'
  AND ListPrice < 1000
  AND ListPrice > 0
ORDER BY ListPrice DESC;

-- 19
SELECT ProductID, Name, ListPrice
FROM Product
WHERE ListPrice = 0
  AND ISNUMERIC(RIGHT(Name, CHARINDEX(' ', REVERSE(Name) + ' ') - 1)) = 1

-- 20
SELECT DISTINCT Color, Class, Style
FROM Product
WHERE ListPrice < 1000
  AND Color IS NOT NULL
  AND Class IS NOT NULL
  AND Style IS NOT NULL;

