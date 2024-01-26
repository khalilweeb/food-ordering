import mealsimg from "./../../assets/meals.jpg";
import clss from "./Header.module.css";
import Button from "./Button";
const Header = (props) => {
  return (
    <>
      <header className={clss.header}>
        <h1>khalil meals</h1>
        <Button onClick={props.onClick}/>
 
      </header>
      <div className={clss['main-image']} >
        <img src={mealsimg} alt="our meals"  />
      </div>
    </>
  );
};

export default Header;
