import clss from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={clss.form}>
      <Input label="amount" input={{ type: "number", defaultValue: "1" , id: "amount", min:"1" , max:"10" }} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
