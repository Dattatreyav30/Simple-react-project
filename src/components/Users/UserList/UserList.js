import { Fragment } from "react";
import UserItem from "../UserItem/UserItem";
import "./UserList.css";
const UserList = (props) => {
  console.log(props);
  return (
    <Fragment>
      <ul className="user-list">
        {props.items.map((userData) => {
          return (
            <UserItem key={userData.id} id={userData.id}>
              {userData.userName}({userData.age}){userData.college}
            </UserItem>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default UserList;
