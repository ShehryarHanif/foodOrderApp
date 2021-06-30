import { useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

import CartProvider from "./store/CartProvider";

function App(props) {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandler} databaseLink={props.databaseLink}/> }

      <Header onShowCart={ showCartHandler }/>

      <main>
        <Meals databaseLink={props.databaseLink}/>
      </main>
    </CartProvider>
  );
}

export default App;
