import { MealItem } from '../MealItem';
import { Card } from '../../Card';
import classes from './styles.module.css';
import DUMMY_MEALS from '../DUMMY_MEALS';

export const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        {DUMMY_MEALS.map(meal => {
          return(
            <>
              <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
              <ul className={classes['meals-list']}>{meal.list}</ul>
            </>
          )
        })}
      </Card>
    </section>
  );
}
