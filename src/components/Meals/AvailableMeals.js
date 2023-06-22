import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import {
  CHEESE_MEALS,
  DIP_MEALS,
  DUMMY_MEALS,
  EXTRA_MEALS,
  MEAT_MEALS,
} from "./utils";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const cheeseList = CHEESE_MEALS.map((cheese) => (
    <MealItem
      key={cheese.id}
      id={cheese.id}
      name={cheese.name}
      description={cheese.description}
      price={cheese.price}
    />
  ));

  const dipList = DIP_MEALS.map((dip) => (
    <MealItem
      key={dip.id}
      id={dip.id}
      name={dip.name}
      description={dip.description}
      price={dip.price}
    />
  ));

  const meatList = MEAT_MEALS.map((meat) => (
    <MealItem
      key={meat.id}
      id={meat.id}
      name={meat.name}
      description={meat.description}
      price={meat.price}
    />
  ));

  const extraList = EXTRA_MEALS.map((extra) => (
    <MealItem
      key={extra.id}
      id={extra.id}
      name={extra.name}
      description={extra.description}
      price={extra.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <h2>Masas</h2>
        <ul>{mealsList}</ul>
        <h2>Quesos</h2>
        <ul>{cheeseList}</ul>
        <h2>Salsas</h2>
        <ul>{dipList}</ul>
        <h2>Fiambres y Carnes</h2>
        <ul>{meatList}</ul>
        <h2>Extras</h2>
        <ul>{extraList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
