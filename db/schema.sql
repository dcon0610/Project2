DROP DATABASE if EXISTS coffee_db;

CREATE DATABASE coffee_db;

USE coffee_db;

CREATE TABLE coffees (
    id INT AUTO_INCREMENT NOT NULL,
    blend_name VARCHAR(40),
    brand VARCHAR(40),
    coffee_description TEXT, 
--had to change from description to coffee_description as 
--'description' is a reserved word
    price DECIMAL(10,2),
    grams INT,
    img VARCHAR(200),
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(50)
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT NOT NULL,
    rating DECIMAL(3,2) UNSIGNED, 
    --- to display 0.00 eg 4.75 (unsigned for positive values only)
    review_text TEXT,
    user_id INT NOT NULL,
    coffee_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (coffee_id) REFERENCES coffees(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
);