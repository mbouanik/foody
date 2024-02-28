-- CREATE TABLE ingredients (
--   name VARCHAR(50) PRIMARY KEY CHECK (name = lower(name)),
--   description TEXT NOT NULL
-- );
--
CREATE TABLE users (
  id VARCHAR(50) PRIMARY KEY,
    diet VARCHAR(255) 
    
);

CREATE TABLE meals (
user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
calories INTEGER NOT NULL,
carbs VARCHAR(10) NOT NULL,
fat VARCHAR(10) NOT NULL,
protein VARCHAR(10) NOT NULL,
image VARCHAR(255) NOT NULL,
id INTEGER NOT NULL
);

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    name  VARCHAR(50) NOT NULL,
    difficulty  VARCHAR(50) NOT NULL,
    type  VARCHAR(50) NOT NULL,
    equipment  VARCHAR(50) NOT NULL,
    muscle  VARCHAR(50) NOT NULL,
    instructions TEXT NOT NULL
)
-- CREATE TABLE plates (
--   name VARCHAR(25) REFERENCES ingredients(name) ON DELETE CASCADE,
--   meal_id INTEGER REFERENCES meals(id) ON DELETE CASCADE,
--   PRIMARY KEY (meal_id, name)
-- );

