import React, { useState } from "react";
import AddEditForm from "../AddEditForm";
import "./style.css";
import { removeUser } from "../../js/actions";
import { useDispatch } from "react-redux";

const UserCard = ({ user }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="user-card" onMouseLeave={() => setShow(false)}>
      <i
        className={`fas fa-ellipsis-v ${show && "action-btn"} `}
        onClick={() => setShow(!show)}
      />
      {show && (
        <ul className="action-menu">
          <li>
            <i className="fas fa-trash" />{" "}
            <span onClick={() => dispatch(removeUser(user._id))}> DELETE</span>
          </li>
          <li>
            <i className="fas fa-pen" />
            <AddEditForm
              oldUser={{
                FirstName: user.FirstName,
                LastName: user.LastName,
                Email: user.Email,
                Phone: user.Phone,
              }}
              userId={user._id}
            />
          </li>
        </ul>
      )}

      <div className="avatar" style={{ background: "rgba(0,0,0,0.5)" }}>
        {/* {user.FirstName[0]} */}
      </div>
      <div className="user-info">
        <p>
          <i className="fas fa-user" />
          <span>
            {user.FirstName} {user.LastName}{" "}
          </span>
        </p>

        <p>
          <i className="fas fa-envelope" />
          <span> {user.Email} </span>
        </p>
        <p>
          <i className="fas fa-phone" />
          <span> {user.Phone}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;