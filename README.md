
# Foody

Foody is an application designed to help you manage your meals and exercise routines. Whether you want to save your favorite dishes based on diet preferences, discover recipes by typing ingredients, or plan workouts with specific nutrient ratios, Foody has you covered [Foody](https://foody-24sx.onrender.com).

<br>\
<img src="./images/landingpage.png" alt="signup" style="width:400px;">
<img src="./images/login.png" alt="signup" style="width:400px;">
<img src="./images/home.png" alt="homepage" style="width:400px;">
<img src="./images/savedRecipes.png" alt="profile" style="width:400px; height:260px;">
<img src="./images/recipePage" alt="post" style="width:400px;">
<img src="./images/dites.png" alt="messages" style="width:400px;">
<img src="./images/savedExercises.png" alt="messages" style="width:400px;">
<img src="./images/searchByNutrients.png" alt="messages" style="width:400px;">
<img src="./images/savedExercises.png" alt="messages" style="width:400px;">
<img src="./images/searchExpenditure.png" alt="messages" style="width:400px;">
<img src="./images/searchExByOptions.png" alt="messages" style="width:400px;">
<img src="./images/searchExcerciseByType.png" alt="messages" style="width:400px;">

## Features

### Save Your Favorite Dishes

- Categorize your favorite dishes based on different diets.

### Recipe Discovery

- Discover new recipes by typing ingredients you have on hand.

### Nutrient Ratio Planning

- Plan your meals based on specific nutrient ratios such as carbs, calories, protein, and fat.

### Exercise Planning

- Choose exercises based on the muscle group you want to work on.
- Specify exercise types like cardio or strength training.
- Customize the difficulty level from beginner to expert.

## API used
- **spoonacular API:** for food nutrients https://spoonacular.com/food-api
- **API Ninja:** exercises tip and instruction https://api-ninjas.com/api/exercises
- **Nutritionix:** for exercies expenditure https://developer.syndigo.com/docs/natural-language-for-exercise

## Tech Stack

### Backend

- **Express:** Web framework for Node.js.
- **PostgreSQL:** Relational database for storing user data.

### Frontend

- **React:** Frontend JavaScript library for building user interfaces.

## Getting Started

To run Foody locally, follow these steps:


1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/foody.git
    cd foody
    ```

2. **Install Dependencies:**
   - Backend:
     ```bash
     cd foody-backend
     npm install
     ```

   - Frontend:
     ```bash
     cd ../foody-frontend
     npm install
     ```

3. **Set up PostgreSQL Database:**
   - Create a new database called foody and configure the connection in the backend.

4. **Start the Servers:**
   - Backend:
     ```bash
     cd foody-backend
     npm start
     ```

   - Frontend:
     ```bash
     cd ../foody-frontend
     npm start
     ```

5. **Open Your Browser:**
   - Navigate to `http://localhost:3000` to use Foody.

## Contributing

If you'd like to contribute to Foody, please check out the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
