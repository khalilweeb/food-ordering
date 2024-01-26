import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {

  const [showCart , setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
    console.log("hi")

  }
  const hideCartHandler = () => {
    setShowCart(false);
    console.log("hello")
  }

  return (
    <>
      <Header onClick={showCartHandler}/>
    {showCart  &&  <Cart  onClickHide={hideCartHandler} />}
      <main>
          <Meals />

      </main>
    </>
  );
}

export default App;
