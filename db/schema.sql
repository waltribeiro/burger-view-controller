DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;
USE burgers_db;
CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(50),
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);

-- ### Schema

-- CREATE DATABASE cat_db;
-- USE cat_db;

-- CREATE TABLE cats
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255) NOT NULL,
-- 	sleepy BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );
