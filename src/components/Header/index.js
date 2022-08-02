import React from 'react';
import mealsImg from '../../assets/meals.jpg';
import { CartIcon } from '../../assets/CartIcon';
import classes from './styles.module.css';

export const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Foodfy</h1>
        <div>
          <button type="button" className={classes['cart-button']}>
            <span className={classes.icon}>
              <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
              3
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

