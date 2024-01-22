import clss from "./Button.module.css";
import CartIcon from "../Cart/CartIcon";
const Button = (props) => {
  return <button className={clss.button}>
    <span className={clss.icon}>
          <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={clss.badge}>
        3
    </span>
  </button>;
};

export default Button;
