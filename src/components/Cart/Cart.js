import clss from "./Cart.module.css";
import Modal from "../UI/Modsl";

const Cart = (props) => {
  const cartItems = (
    <ul className={clss["cart-items"]}>
      {[{ id: "Shushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.id}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClickHide}>
      {cartItems}
      <div className={clss.total}>
        <span>Total amount</span>
        <span>35.66</span>
      </div>
      <div className={clss.actions}>
        <button className={clss[ "button--alt"]} onClick={props.onClickHide} >Close</button>
        <button className={clss.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
