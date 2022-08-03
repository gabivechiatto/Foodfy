import React from 'react';
import { Header } from './components/Header';
import { Meals } from './components/Meals';
import { Cart } from './components/Cart';

function App() {
  return (
    <React.Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
