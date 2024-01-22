import clss from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = props.price.toFixed(2) + "$";

  return (
    <li className={clss.meal}  >
      <div>
        <h3>{props.name}</h3>
        <div  className={clss.description} >{props.desc}</div>
        <div className={clss.price} >{price}</div>
      </div>
      <div>
            <MealItemForm/>
      </div>
    </li>
  );
};

export default MealItem;
