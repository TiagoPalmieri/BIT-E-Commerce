DROP DATABASE IF EXISTS bit;

-- Crear la base de datos
CREATE DATABASE bit;

-- Cambiar a la base de datos recién creada
USE bit;

-- Tabla: users
CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  userPassword VARCHAR(100) NOT NULL,
  fullName VARCHAR(255) NOT NULL,
  telephone VARCHAR(20),
  dni VARCHAR(10) UNIQUE,
  address TEXT,
  rol ENUM('admin', 'user', 'staff')
);

-- Tabla: seller
CREATE TABLE seller (
  id INT PRIMARY KEY,
  userId INT NOT NULL,
  sells INT DEFAULT 0,
  publications INT DEFAULT 0,
  gains DECIMAL(10, 2) DEFAULT 0.00,
  calification INT DEFAULT 0,
  FOREIGN KEY (userId) REFERENCES users(id)
);

-- Tabla: product
CREATE TABLE product (
  sku VARCHAR(255) PRIMARY KEY,
  description TEXT,
  type ENUM('type1', 'type2', 'type3'),
  price DECIMAL(10, 2) NOT NULL,
  stock INT DEFAULT 0,
  favorites BOOLEAN DEFAULT false
);

-- Tabla: publication
CREATE TABLE publication (
  id INT PRIMARY KEY,
  date DATE NOT NULL,
  description TEXT,
  title VARCHAR(255),
  sellerId INT,
  productSku VARCHAR(255),
  FOREIGN KEY (sellerId) REFERENCES seller(id),
  FOREIGN KEY (productSku) REFERENCES product(sku)
);

-- Tabla: reviews
CREATE TABLE reviews (
  id INT PRIMARY KEY,
  content TEXT,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  userId INT,
  FOREIGN KEY (userId) REFERENCES users(id)
);

-- Tabla: image
CREATE TABLE image (
  id INT PRIMARY KEY AUTO_INCREMENT,
  format ENUM('jpeg', 'png', 'gif'),
  weight FLOAT,
  resolution VARCHAR(255),
  directory VARCHAR(255),
  productSku VARCHAR(255),
  FOREIGN KEY (productSku) REFERENCES product(sku)
);

-- Tabla: transactionHistory
CREATE TABLE transactionHistory (
  id INT PRIMARY KEY,
  buyerId INT,
  sellerId INT,
  productSku VARCHAR(255),
  FOREIGN KEY (buyerId) REFERENCES users(id),
  FOREIGN KEY (sellerId) REFERENCES seller(id),
  FOREIGN KEY (productSku) REFERENCES product(sku)
);

-- Tabla: billing
CREATE TABLE billing (
  invoiceId INT PRIMARY KEY,
  buyDate DATE,
  sellerId INT,
  buyerId INT,
  FOREIGN KEY (sellerId) REFERENCES seller(id),
  FOREIGN KEY (buyerId) REFERENCES users(id)
);

-- Tabla: sell
CREATE TABLE sell (
  id INT PRIMARY KEY,
  sellDate DATE,
  buyerId INT,
  sellerId INT,
  FOREIGN KEY (buyerId) REFERENCES users(id),
  FOREIGN KEY (sellerId) REFERENCES seller(id)
);
