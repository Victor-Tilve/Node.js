CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email VARCHAR(50)
);


INSERT INTO users(name, email)
VALUES ('Joe','joe@ibm.com'),
        ('Ryan','ryan@ibm.com'),
        ('victor','victor@ibm.com');

SELECT email FROM users;



