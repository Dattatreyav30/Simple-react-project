import Button from "./Button";
import "./Card.css";
const Card = (props) => {
  const onClickBtnHandler = () => {
    props.onChange(true)
  };
  return (
    <div className="overlay">
      <div className="card">
        <div className="card-title">{props.title}</div>
        <div className="card-content">{props.content}</div>
        <div className="card-footer">
          <Button onClick={onClickBtnHandler}>I understood</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
