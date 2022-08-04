import React, { useContext } from 'react';
import mealsImg from '../../assets/meals.jpg';
import { CartIcon } from '../../assets/CartIcon';
import classes from './styles.module.css';
import CartContext from '../../store/cart-context';

export const Header = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Foodfy</h1>
        <div>
          <button type="button" className={classes['cart-button']} onClick={props.onShow}>
            <span className={classes.icon}>
              <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
              {numberOfCartItems}
            </span>
          </button>
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="meals"/>
      </div>
    </React.Fragment>
  );
}

