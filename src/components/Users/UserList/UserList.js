import UserItem from "../UserItem/UserItem";
import './UserList.css'
const UserList = (props) => {
  console.log(props);
  return (
    <div>
      <ul className="user-list">
        {props.items.map((userData) => {
          return (
            <UserItem key={userData.id} id={userData.id}>
              {userData.userName}
              {" "}
              {userData.age}
            </UserItem>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
