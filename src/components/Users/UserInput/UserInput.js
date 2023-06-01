import { Fragment, useState, useRef } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import "./UserInput.css";
import ReactDOM from "react-dom";
// import Wrapper from "../../Helpers/Wrapper";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [isValid, setIsValid] = useState(true);
  const [isageValid, setValidAge] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      nameInputRef.current.value.trim().length === 0 ||
      ageInputRef.current.value.trim().length === 0 ||
      collegeInputRef.current.value.trim().length === 0
    ) {
      setIsValid(false);
      return;
    } else if (ageInputRef.current.value < 0) {
      return setValidAge(false);
    }
    props.onInput({
      userName: nameInputRef.current.value,
      age: ageInputRef.current.value,
      college: collegeInputRef.current.value,
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
  };

  const onChnageCardHandler = (boolean) => {
    setIsValid(boolean);
    setValidAge(boolean);
  };

  const Overlay = () => {
    return (
      <Fragment>
        {!isValid && (
          <Card
            title={"!Warning"}
            content={"Please Enter valid age and username"}
            onChange={onChnageCardHandler}
          />
        )}
        {!isageValid && (
          <Card
            title={"!Warning"}
            content={"Please enter age > 0"}
            onChange={onChnageCardHandler}
          />
        )}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className="form-control">
        <form method="post" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="username"
            // value={userData.userName}
            ref={nameInputRef}
          />
          <input
            // value={userData.age}
            type="number"
            placeholder="age"
            ref={ageInputRef}
          />
          <input type="text" placeholder="college name" ref={collegeInputRef} />
          <Button type="submit">Add user</Button>
        </form>
      </div>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default UserInput;
