import clss from "./Card.module.css";

const Card = props => {

    return <div className={clss.card}>
        {props.children}
    </div>
}

export default Card;