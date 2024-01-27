import { useContext } from "react";
import clss from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cartContext";

const MealItem = (props) => {
     const ctx = useContext(CartContext)
    const price = props.price.toFixed(2) + "$";
    const addCartHandler = amount => {

      ctx.addItem({
        id: props.id,
        name : props.name,
        amount : amount,
        price : props.price
      })


    }


  return (
    <li className={clss.meal}  >
      <div>
        <h3>{props.name}</h3>
        <div  className={clss.description} >{props.desc}</div>
        <div className={clss.price} >{price}</div>
      </div>
      <div>
            <MealItemForm onAddToCart={addCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
