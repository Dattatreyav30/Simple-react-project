import { Fragment } from "react";
import Button from "./Button";
import "./Card.css";
const Card = (props) => {
  const onClickBtnHandler = () => {
    props.onChange(true);
  };
  return (
    <Fragment>
      <div className="overlay">
        <div className="card">
          <div className="card-title">{props.title}</div>
          <div className="card-content">{props.content}</div>
          <div className="card-footer">
            <Button onClick={onClickBtnHandler}>I understood</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
