import clss from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitItemHandler = (event) => {
    event.preventDefault();
    const entredAmount = amountInputRef.current.value;
    const entredAmountNumber = +entredAmount;

    if (
      entredAmount.trim().length === 0 ||
      entredAmountNumber < 1 ||
      entredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(entredAmountNumber);

  };
  return (
    <form className={clss.form} onSubmit={submitItemHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          type: "number",
          defaultValue: "1",
          id: "amount",
          min: "1",
          max: "10",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>please enter a valide amount 1 - 10</p>}
    </form>
  );
};

export default MealItemForm;
