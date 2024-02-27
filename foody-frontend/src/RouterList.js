import { Routes, Route } from "react-router-dom";
import ExercisePage from "./Exercise/ExercicePage";
import ExerciseProfile from "./Exercise/ExerciseProfile";
import FoodList from "./Food/FoodList";
import HomePage from "./HomePage/HomePage";
import PrivateRoutes from "./PrivateRoutes";
import RecipePage from "./Recipe/RecipePage";
import RecipeProfile from "./Recipe/RecipeProfile";
import SearchByIngrPage from "./Search/SearchByIngrPage";
import SearchPage from "./Search/SearchPage";

const RouterList = ({ exercisesIds }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/profile/recipes" element={<RecipeProfile />} />
        <Route path="/profile/exercises" element={<ExerciseProfile />} />
        <Route path="/search/nutrients" element={<SearchPage />} />
        <Route path="/search/ingredients" element={<SearchByIngrPage />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
        <Route path="/exercises" element={<ExercisePage />} />
      </Route>
    </Routes>
  );
};

export default RouterList;
