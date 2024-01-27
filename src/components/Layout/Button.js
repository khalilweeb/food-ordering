import clss from "./Button.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cartContext";
const Button = (props) => {
    const [buttonAnim , setButtonAnim]  = useState(false)
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const btnClasses = `${clss.button}  ${ buttonAnim && clss.bump}`;

  useEffect(() => {
    if(ctx.items.length === 0 ) {
      return;
    }
    setButtonAnim(true);
    const timer = setTimeout(() => {
      setButtonAnim(false)
    } , 300);

    return () => clearTimeout(timer)

  }, [ctx.items]);


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={clss.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={clss.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default Button;
