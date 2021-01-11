use accolite_AU;
CREATE TABLE PRODUCT(
    PROD_CODE VARCHAR(5) PRIMARY KEY,
    PROD_NAME VARCHAR(15),
    CAT_CODE VARCHAR(5) ,
    UNIT_PRICE integer,
	FOREIGN KEY (CAT_CODE) REFERENCES CATEGORY(CAT_CODE)
	
);
n
CREATE TABLE CATEGORY(
    CAT_CODE VARCHAR(5) PRIMARY KEY,
    CAT_NAME VARCHAR(15)
);

CREATE TABLE CUSTOMER(
    CUST_ID integer PRIMARY KEY,
    CUST_NAME VARCHAR(25),
    CUST_DOB DATE,
    CUST_GENDER CHAR(1),
    CUST_MOBILE VARCHAR(10),
    LOC_CODE integer,
	foreign key(loc_code) references location(loc_code)
);

CREATE TABLE SALES_EXE(
    E_ID integer PRIMARY KEY,
    E_NAME VARCHAR(20),
    E_DOB DATE,
    E_GENDER CHAR(1),
    E_MOBILE VARCHAR(10),
);

CREATE TABLE LOCATION(
    LOC_CODE integer PRIMARY KEY,
    LOC_NAME VARCHAR(20)
);