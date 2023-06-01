import { Fragment, useState } from "react";
import UserInput from "./components/Users/UserInput/UserInput";
import UserList from "./components/Users/UserList/UserList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { userName: "datta", age: 25, id: 1,college : 'jain' },
    { userName: "max", age: 24, id: 2 ,college : "oxford"},
  ]);
  const onInputHandler = (userData) => {
    setUsers((prevData) => {
      const previousData = [...prevData];
      previousData.unshift({
        userName: userData.userName,
        age: userData.age,
        college : userData.college,
        id: Math.random().toString(),
      });
      return previousData;
    });
  };

  return (
    <Fragment>
      <section id="user-inputs">
        <UserInput onInput={onInputHandler} />
      </section>
      <section id="user-form">
        <UserList items={users} />
      </section>
    </Fragment>
  );
};

export default App;
