import classes from './styles.module.css';

export const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food delivered to you!</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
    </section>
  );
}
