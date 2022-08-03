import React, { useState } from 'react';
import { Header } from './components/Header';
import { Meals } from './components/Meals';
import { Cart } from './components/Cart';

function App() {
  const [cartIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => {
    setCardIsShown(!cartIsShown);
  }

  const hideCartHandler = () => {
    setCardIsShown(false);
  }

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShow={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
