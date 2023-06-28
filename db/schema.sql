-- Dropping database and creating new database
DROP DATABASE IF EXISTS developdevs_db;
CREATE DATABASE developdevs_db;
-- Using new database

USE developdevs_db;
-- Creating tables


-- CREATE TABLE developer (
--     id VARCHAR(36) PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     yrs_experience INT NOT NULL,
--     technology_id VARCHAR(30) NOT NULL,
--     location VARCHAR(30) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE employer (
--     id VARCHAR(36) PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     company INT NOT NULL,
--     technology_id VARCHAR(30) NOT NULL,
--     location VARCHAR(30) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE technologies (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30) NOT NULL,
--     badge_link VARCHAR(255)
-- );
