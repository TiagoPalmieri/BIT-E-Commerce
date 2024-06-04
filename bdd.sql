DROP DATABASE IF EXISTS bit;

CREATE DATABASE bit;

USE bit;

CREATE TABLE user (
  id VARCHAR(255) PRIMARY KEY,
  mail VARCHAR(255),
  password VARCHAR(255),
  name VARCHAR(255),
  lastname VARCHAR(255),
  telephone VARCHAR(255),
  dni VARCHAR(255),
  roles ENUM('admin', 'user', 'seller', 'staff'), 
  calification INT
);

CREATE TABLE seller (
  id VARCHAR(255),
  sells INT,
  dni VARCHAR(255),
  publications INT,
  gains INT,
  userId VARCHAR(255),
  FOREIGN KEY (userId) REFERENCES user(id)
);

CREATE TABLE product (
  sku VARCHAR(255),
  description TEXT,
  type ENUM('type1', 'type2', 'type3'), 
  price FLOAT,
  stock INT,
  PRIMARY KEY (sku)
);

CREATE TABLE publication (
  id VARCHAR(255),
  date DATE,
  description TEXT,
  title VARCHAR(255),
  sellerId VARCHAR(255),
  productSku VARCHAR(255),
  FOREIGN KEY (sellerId) REFERENCES seller(id),
  FOREIGN KEY (productSku) REFERENCES product(sku)
);

CREATE TABLE image (
  id VARCHAR(255),
  format ENUM('jpeg', 'png', 'gif'), 
  weight FLOAT,
  resolution VARCHAR(255),
  directory VARCHAR(255),
  productSku VARCHAR(255),
  FOREIGN KEY (productSku) REFERENCES product(sku)
);

CREATE TABLE transactionHistory (
  idTransaction VARCHAR(255),
  buyerId VARCHAR(255),
  sellerId VARCHAR(255),
  productSku VARCHAR(255),
  FOREIGN KEY (buyerId) REFERENCES user(id),
  FOREIGN KEY (sellerId) REFERENCES seller(id),
  FOREIGN KEY (productSku) REFERENCES product(sku)
);

CREATE TABLE billing (
  invoiceId VARCHAR(255),
  buyDate DATE,
  sellerId VARCHAR(255),
  buyerId VARCHAR(255),
  FOREIGN KEY (sellerId) REFERENCES seller(id),
  FOREIGN KEY (buyerId) REFERENCES user(id)
);

CREATE TABLE sell (
  id VARCHAR(255),
  sellDate DATE,
  buyerId VARCHAR(255),
  sellerId VARCHAR(255),
  FOREIGN KEY (buyerId) REFERENCES user(id),
  FOREIGN KEY (sellerId) REFERENCES seller(id)
);
