import { Input } from '../../Input';
import classes from './styles.module.css';

export const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <form className={classes.form}>
        <Input
          label='Amount'
          input={{
              id: 'amount_' + props.id,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1',
          }}
        />
          <button>Add</button>
        </form>
      </div>
    </li>
  )
}
