SELECT * FROM vehicles
  WHERE owner_id IN (SELECT id FROM users WHERE email = $1);
