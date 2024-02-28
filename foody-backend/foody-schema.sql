CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    diet VARCHAR(50) 
);

CREATE TABLE meals (
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    title VARCHAR(50),
    calories INTEGER,
    carbs VARCHAR(10),
    fat VARCHAR(10),
    protein VARCHAR(10),
    image VARCHAR(255),
    id INTEGER 
);

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    name  VARCHAR(50),
    difficulty  VARCHAR(50),
    type  VARCHAR(50),
    equipment  VARCHAR(50),
    muscle  VARCHAR(50),
    instructions TEXT
)

