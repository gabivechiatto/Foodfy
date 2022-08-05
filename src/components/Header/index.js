import React, { useContext, useEffect, useState } from 'react';
import mealsImg from '../../assets/meals.jpg';
import { CartIcon } from '../../assets/CartIcon';
import classes from './styles.module.css';
import CartContext from '../../store/cart-context';

export const Header = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false)
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)

  const btnClasses = `
    ${classes['cart-button']}
    ${btnHighlight ? classes.bump : ''}
  `

  useEffect(() => {
    if(cartCtx.items.length === 0){
      return
    }
    setBtnHighlight(true)

    const timer = setTimeout(() => {
      setBtnHighlight(false)
    } , 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Foodfy</h1>
        <div>
          <button type="button" className={btnClasses} onClick={props.onShow}>
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

