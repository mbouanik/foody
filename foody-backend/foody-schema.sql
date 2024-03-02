
-- Create the 'users' table
CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(25),
    diet VARCHAR(50) 

);

-- Create the 'exercises' table with a foreign key reference to 'users'
CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    name VARCHAR(50),
    difficulty VARCHAR(50),
    type VARCHAR(50),
    equipment VARCHAR(50),
    muscle VARCHAR(50),
    instructions TEXT
);

-- Create the 'meals' table with a foreign key reference to 'users'
CREATE TABLE meals (
    id INTEGER PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    title TEXT,
    calories INTEGER,
    carbs VARCHAR(10),
    fat VARCHAR(10),
    protein VARCHAR(10),
    image VARCHAR(255)
);
