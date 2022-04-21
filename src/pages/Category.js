import { useParams } from "react-router-dom";
import { getFIlterCategories } from "../api";
import { useEffect, useState } from "react";
import Loader from "../component/Loader";
import { MealList } from "../component/MealList";
export default function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFIlterCategories(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Loader /> : <MealList meals={meals} />}</>;
}
