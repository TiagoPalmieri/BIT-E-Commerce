DROP DATABASE IF EXISTS bit;

-- Create the database
CREATE DATABASE bit;

-- Switch to the newly created database
USE bit;

-- Table: users
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  mail VARCHAR(255),
  password_ VARCHAR(255),
  name_ VARCHAR(255),
  lastname VARCHAR(255),
  telephone VARCHAR(255),
  dni VARCHAR(255),
  roles ENUM('admin', 'user', 'seller', 'staff'), 
  calification INT
);

-- Table: seller
CREATE TABLE seller (
  id VARCHAR(255) PRIMARY KEY,
  userId VARCHAR(255),
  sells INT,
  publications INT,
  gains INT,
  dni VARCHAR(255),
  FOREIGN KEY (userId) REFERENCES users(id)
);

-- Table: product
CREATE TABLE product (
  sku VARCHAR(255) PRIMARY KEY,
  description TEXT,
  type ENUM('type1', 'type2', 'type3'), 
  price FLOAT,
  stock INT
);

-- Table: publication
CREATE TABLE publication (
  id VARCHAR(255) PRIMARY KEY,
  date DATE,
  description TEXT,
  title VARCHAR(255),
  sellerId VARCHAR(255),
  productSku VARCHAR(255),
  FOREIGN KEY (sellerId) REFERENCES seller(id),
  FOREIGN KEY (productSku) REFERENCES product(sku)
);

-- Table: image
CREATE TABLE image (
  id VARCHAR(255) PRIMARY KEY,
  format ENUM('jpeg', 'png', 'gif'), 
  weight FLOAT,
  resolution VARCHAR(255),
  directory VARCHAR(255),
  productSku VARCHAR(255),
  FOREIGN KEY (productSku) REFERENCES product(sku)
);

-- Table: transactionHistory
CREATE TABLE transactionHistory (
  idTransaction VARCHAR(255) PRIMARY KEY,
  buyerId VARCHAR(255),
  sellerId VARCHAR(255),
  productSku VARCHAR(255),
  FOREIGN KEY (buyerId) REFERENCES users(id),
  FOREIGN KEY (sellerId) REFERENCES seller(id),
  FOREIGN KEY (productSku) REFERENCES product(sku)
);

-- Table: billing
CREATE TABLE billing (
  invoiceId VARCHAR(255) PRIMARY KEY,
  buyDate DATE,
  sellerId VARCHAR(255),
  buyerId VARCHAR(255),
  FOREIGN KEY (sellerId) REFERENCES seller(id),
  FOREIGN KEY (buyerId) REFERENCES users(id)
);

-- Table: sell
CREATE TABLE sell (
  id VARCHAR(255) PRIMARY KEY,
  sellDate DATE,
  buyerId VARCHAR(255),
  sellerId VARCHAR(255),
  FOREIGN KEY (buyerId) REFERENCES users(id),
  FOREIGN KEY (sellerId) REFERENCES seller(id)
);
