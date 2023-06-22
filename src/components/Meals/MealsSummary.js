import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      {/* <h2>Delicious Food, Delivered To You</h2> */}
        <h3>Comida delicosa, elegida especialmente por usted!</h3>
      <p>
        Este es un establecimiento especializado en la elaboración y venta de diferentes tipos de pizzas personalizadas por el propio cliente.
        {/* Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home. */}
      </p>
      <p>
        {/* All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs! */}
      </p>
    </section>
  );
};

export default MealsSummary;
