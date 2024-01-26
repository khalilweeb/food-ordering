import clss from "./Button.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cartContext";
const Button = (props) => {
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((curNumber , item) => {
    return curNumber + item.amount
  } , 0)
  return <button className={clss.button} onClick={props.onClick}>
    <span className={clss.icon}>
          <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={clss.badge}>
        {numberOfCartItems}
    </span>
  </button>;
};

export default Button;
