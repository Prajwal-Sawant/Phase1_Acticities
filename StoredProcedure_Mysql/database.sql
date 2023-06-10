CREATE DATABASE customerInfo;
USE customerInfo;

CREATE TABLE customer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100),
  phone_number VARCHAR(20),
  address VARCHAR(200),
  registered_date DATE
);

SElECT * FROM customer;

CREATE PROCEDURE read_details
as 
SELECT * FROM customer
go
