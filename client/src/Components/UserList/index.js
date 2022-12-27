import React, { useEffect } from "react";
import UserCard from "../UserCard";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../js/actions";
import AddEditForm from "../AddEditForm";

const UserList = () => {
  const { loading, users } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <AddEditForm />
          <div className="users-container">
            {users.map((user) => (
              <UserCard user={user} key={user._id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;