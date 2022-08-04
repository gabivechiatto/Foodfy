import { useRef, useState, useContext } from 'react'
import { Input } from '../../Input'
import classes from './styles.module.css'
import CartContext from '../../../store/cart-context'

export const MealItem = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext)

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5) {
        setIsAmountValid(false);
        return;
    }
    setIsAmountValid(true);
    addToCartHandler(enteredAmountNumber);
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <form
          className={classes.form}
          onSubmit={submitHandler}
          onAddToCart={addToCartHandler}
        >
        <Input
          ref={amountInputRef}
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
          {!isAmountValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
      </div>
    </li>
  )
}
