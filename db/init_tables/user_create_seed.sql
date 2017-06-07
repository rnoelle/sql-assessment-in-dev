-- The table needs to be dropped each time you restart nodemon. This is necessary for the Postman tests.
-- =======================
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS vehicles CASCADE;
-- =======================

-- Write a create table statement below. The table needs to be called 'users'. The table should have the following columns:

-- id ( auto incrementing primary key )
-- name ( string )
-- email (string)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(100)
);





-- Write an insert statement below. You will need to insert the user data into the 'users' table.

INSERT INTO users (name, email) VALUES ('John Smith', 'john@smith.com');
INSERT INTO users (name, email) VALUES ('Dave Davis', 'dave@davis.com');
INSERT INTO users (name, email) VALUES ('Jane Janis', 'jane@janis.com');
