import { MealItem } from "./MealItem";

function MealList({ meals = [] }) {
  return (
    <div className="list">
      {meals.length ? (
        meals.map((meal) => <MealItem key={meal.idMeal} {...meal} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}
export { MealList };
