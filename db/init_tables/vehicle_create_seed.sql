-- The table needs to be dropped each time you restart nodemon. This is necessary for the Postman tests.
-- =======================
DROP TABLE IF EXISTS vehicles;
-- =======================

-- Write a create table statement below. The table needs to be called 'vehicles'. The table should have the following columns:

-- id ( auto incrementing primary key )
-- make ( string )
-- model (string)
-- year (integer)
-- owner (integer, foreign key)

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  make VARCHAR(40),
  model VARCHAR(40),
  year INT,
  owner_id INT REFERENCES users(id)
);







-- Write an insert statement below. You will need to insert the user data into the 'users' table.


INSERT INTO vehicles (make, model, year, owner_id) VALUES ('Toyota', 'Camry', 1991, 1);
INSERT INTO vehicles (make, model, year, owner_id) VALUES ('Honda', 'Civic', 1995, 1);
INSERT INTO vehicles (make, model, year, owner_id) VALUES ('Ford', 'Focus', 2005, 1);
INSERT INTO vehicles (make, model, year, owner_id) VALUES ('Ford', 'Taurus', 2003, 2);
INSERT INTO vehicles (make, model, year, owner_id) VALUES ('VW', 'Bug', 2010, 2);
INSERT INTO vehicles (make, model, year, owner_id) VALUES ('Mini', 'Cooper', 2013, 3);
