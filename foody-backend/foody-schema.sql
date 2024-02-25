-- CREATE TABLE ingredients (
--   name VARCHAR(50) PRIMARY KEY CHECK (name = lower(name)),
--   description TEXT NOT NULL
-- );
--
CREATE TABLE users (
  id VARCHAR(50) PRIMARY KEY
    
);

CREATE TABLE meals (
user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
calories INTEGER NOT NULL,
carbs VARCHAR(10) NOT NULL,
fat VARCHAR(10) NOT NULL,
protein VARCHAR(10) NOT NULL,
image TEXT DEFAULT "https://st.depositphotos.com/1169330/3838/i/450/depositphotos_38389483-stock-photo-recipe-book.jpg",
id INTEGER NOT NULL
);

-- CREATE TABLE plates (
--   name VARCHAR(25) REFERENCES ingredients(name) ON DELETE CASCADE,
--   meal_id INTEGER REFERENCES meals(id) ON DELETE CASCADE,
--   PRIMARY KEY (meal_id, name)
-- );

