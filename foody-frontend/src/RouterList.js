import { Routes, Route } from "react-router-dom";
import ExercisePage from "./ExercicePage";
import FoodList from "./FoodList";
import HomePage from "./HomePage";
import Profile from "./Profile";
import RecipePage from "./RecipePage";
import SearchByIngrPage from "./SearchByIngrPage";
import SearchPage from "./SearchPage";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search/nutrients" element={<SearchPage />} />
      <Route path="/search/ingredients" element={<SearchByIngrPage />} />
      <Route path="/recipes/:id" element={<RecipePage />} />
      <Route path="/exercises" element={<ExercisePage />} />
    </Routes>
  );
};

export default RouterList;
