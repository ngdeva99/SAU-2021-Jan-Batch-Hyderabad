select P1.PROD_CODE, P1.PROD_NAME, T.DOP, max(UNITS) AS MAX_UNITS from PRODUCT P1
INNER JOIN
(SELECT sum(NO_UNITS) as UNITS, PROD_CODE,DOP 
	FROM LAST_WEEK L,CUSTOMER C 
	WHERE C.LOC_CODE=600049 
	AND C.CUST_ID=L.CUST_ID 
    GROUP BY DOP,PROD_CODE) T
ON T.PROD_CODE=P1.PROD_CODE GROUP BY T.DOP;


SELECT E.*, T.PRODUCTS_SOLD AS NO_SOLD, T.NO_OF_UNITS AS NO_OF_UNITS FROM SALES_EXE E
LEFT JOIN
(SELECT E_ID, COUNT(DISTINCT PROD_CODE) PRODUCTS_SOLD, SUM(NO_UNITS) AS NO_OF_UNITS FROM SALES GROUP BY E_ID) T
ON T.E_ID=E.E_ID;