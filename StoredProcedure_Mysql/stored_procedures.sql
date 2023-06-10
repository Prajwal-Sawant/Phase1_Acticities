DELIMITER //
CREATE PROCEDURE Read_data()
BEGIN
 SELECT * FROM customer;
 END //
 
 DELIMITER;
 
 CALL Read_data()
 
 



DELIMITER //

CREATE PROCEDURE create_row(
	p_id INT ,
    p_first_name VARCHAR(50),
    p_last_name VARCHAR(50),
    p_email VARCHAR(100),
    p_phone_number VARCHAR(20),
    p_address VARCHAR(20),
    p_registered_date DATE
)
BEGIN
  INSERT INTO customer(id,first_name, last_name, email, phone_number,address, registered_date)
  VALUES (P_id,p_first_name, p_last_name, p_email, p_phone_number,p_address,p_registered_date);
END //

DELIMITER ;

CALL create_row(2,'Prajwal', 'Sawant', 'prajwalsawant@gmail.com', '8600257153','Thane','2023-06-07');
CALL create_row(3,'shubham', 'patil', 'shubhampatil@gmail.com', '8600257134','Pune','2023-06-10');




DELIMITER //

CREATE PROCEDURE update_customer_name(
   u_id INT,
   u_first_name VARCHAR(50)
)
BEGIN
  UPDATE customer c
  SET c.first_name = u_first_name
  WHERE c.id = u_id;
END //

DELIMITER ;

CALL update_customer_name(1, 'Aniket');



DELIMITER //
CREATE PROCEDURE DeleteCustomerInfo(
  cust_id INT
)
BEGIN
    DELETE FROM customer
    WHERE id = cust_id;
END//

DELIMITER ;

CALL DeleteCustomerInfo(3);
