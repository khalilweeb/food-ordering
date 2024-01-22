import clss from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={clss.input}>
      <label htmlFor={props.input.id}>{props.label}</label> 
        <input  id={props.input.id} {...props.input}/>
    </div>
  );
};

export default Input;
