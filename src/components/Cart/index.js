import { Modal } from '../Modal';
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
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}
