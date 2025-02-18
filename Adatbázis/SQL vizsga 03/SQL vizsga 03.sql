/* SQL tanfolyam vizsga - Szabó-Temple Olivér


3,
C. CONCAT

4,
D. 1 oszlopot és legfeljebb 1 sort

5,
D. bármennyi oszlopot és bármennyi sort

6,
A. bármennyi sort és bármennyi oszlopot

7,
B. 1 sort és csak 1 oszlopot

*/

/*Feladat:
Készítsünk egy olyan összesítő lekérdezést a vásárlásokból (Orders),
amelyben egyetlen sorban pontosvessző+szóközzel felsorolva láthatjuk a termékek nevét (Products),
amelyek az adott vásárlásban szerepelnek. Rendezzük vásárlás dátuma (OrderDate) szerint növekvőbe.*/

SELECT O.OrderID, O.OrderDate, O.SubTotal, STRING_AGG(P.NAME, '; ') AS Products
FROM ORDERS O
JOIN OrderDetail ORD ON ORD.OrderID = O.OrderID
JOIN PRODUCT P ON ORD.ProductID = P.ProductID
GROUP BY O.OrderID, O.OrderDate, O.SubTotal
ORDER BY O.OrderDate;
