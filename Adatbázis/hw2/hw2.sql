-- HF2

-- 1
SELECT *
FROM Orders
WHERE SalesPersonID IS NULL;

-- 2
SELECT COUNT(*) AS SalesAmount, AVG(SubTotal) as AvgSales, SUM(SubTotal) as TotalSaves
FROM Orders
WHERE SubTotal BETWEEN 10000 AND 100000

-- 3
SELECT SalesPersonID, SUM(SubTotal) AS [TOTAL], COUNT(SubTotal) AS [SalesAmount]
FROM ORDERS
WHERE SalesPersonID IS NOT NULL
  AND YEAR(OrderDate) = '2012'
GROUP BY SalesPersonID

--4
SELECT YEAR(OrderDate), MONTH(OrderDate), SUM(SubTotal)
FROM Orders
GROUP BY YEAR(OrderDate), MONTH(OrderDate)
ORDER BY YEAR(OrderDate), MONTH(OrderDate)

-- 5
SELECT SalesPersonID,
       SUM(CASE WHEN YEAR(OrderDate) = 2011 THEN SubTotal END) AS [2011],
       SUM(CASE WHEN YEAR(OrderDate) = 2012 THEN SubTotal END) AS [2012],
       SUM(CASE WHEN YEAR(OrderDate) = 2013 THEN SubTotal END) AS [2013],
       SUM(CASE WHEN YEAR(OrderDate) = 2014 THEN SubTotal END) AS [2014],
       SUM(CASE WHEN YEAR(OrderDate) = 2015 THEN SubTotal END) AS [2015],
       SUM(CASE WHEN YEAR(OrderDate) = 2016 THEN SubTotal END) AS [2016],
       SUM(SubTotal)                                           AS Total

FROM Orders
GROUP BY SalesPersonID