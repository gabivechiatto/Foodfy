import classes from './styles.module.css';

export const Cart = (props) => {
  const cartItems = <ul className={classes['card-items']}>{[
    {
      id: 1,
      name: 'Sushi',
      amount: 2,
      price: 10.99
    }].map((item) => <li>{item.name}</li>)
}</ul>

  return(
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  )
}