import clss from "./Cart.module.css";
import Modal from "../UI/Modsl";
import { useContext } from "react";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = "$" + ctx.totalAmount.toFixed(2);
  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {

    ctx.removeItem(id);
    console.log("oooooooooooooooooooooo");
 
  };
  const AddCartItemHandler = (item) => {
    ctx.addItem({...item , amount: 1})
  };

  const cartItems = (
    <ul className={clss["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null , item.id)}
          onAdd={AddCartItemHandler.bind(null , item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClickHide}>
      {cartItems}
      <div className={clss.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={clss.actions}>
        <button className={clss["button--alt"]} onClick={props.onClickHide}>
          Close
        </button>
        {hasItems && <button className={clss.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
