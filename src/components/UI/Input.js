import clss from "./Input.module.css";
import React from "react"; 

const Input = React.forwardRef((props , ref) => {
  return (
    <div className={clss.input}>
      <label htmlFor={props.input.id}>{props.label}</label> 
        <input  ref={ref} id={props.input.id} {...props.input}/>
    </div>
  );
})

export default Input;
