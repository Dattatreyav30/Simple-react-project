import './UserItem.css'

const UserItem = (props) => {
  return <li className="user-item">{props.children}</li>;
};

export default UserItem;
