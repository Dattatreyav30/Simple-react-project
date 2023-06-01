import { Fragment, useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import "./UserInput.css";
import ReactDOM from "react-dom";
// import Wrapper from "../../Helpers/Wrapper";

const UserInput = (props) => {
  const [userData, setUserData] = useState({
    userName: "",
    age: "",
  });

  const [isValid, setIsValid] = useState(true);
  const [isageValid, setValidAge] = useState(true);

  const onChangeNameHandler = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      userName: e.target.value,
    }));
  };

  const onChangeAgeHandler = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      age: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      userData.userName.trim().length === 0 ||
      userData.age.trim().length === 0
    ) {
      setIsValid(false);
      return;
    } else if (userData.age.trim() < 0) {
      return setValidAge(false);
    }
    props.onInput(userData);
    setUserData({ userName: "", age: "" });
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
            onChange={onChangeNameHandler}
            type="text"
            placeholder="username"
            value={userData.userName}
          />
          <input
            onChange={onChangeAgeHandler}
            value={userData.age}
            type="number"
            placeholder="age"
          />
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
