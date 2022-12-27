//ADD USER
//PATH: /api/users
//RESPONSE THE NEW USER
/*******/

// GET ALL USERS
//PATH :/api/users
//RESPONSE ARRAY OF USERS
/******* */

// DELETE USER BY ID
//PATH :/api/users
/***** */

// UPDATE USER BY ID
//PATH :/api/:userId
//RESPONSE THE EDITED USER OBJECT

import axios from "axios";
import { GET_USERS, ADD_USER } from "../ActionTypes";
export const getUsers = () => (dispatch) => {
  axios.get("/api/users").then((res) => {
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  });
};
export const addUser = (newUser) => (dispatch) => {
  // newUser={FirstName,LastName,age, Email}
  axios
    .post("/api/users", newUser)
    .then((res) =>
      dispatch({
        type: ADD_USER,
        payload: res.data,
      })
    )
    .catch((err) => alert("ADD ERROR"));
};
export const editUserById = (id, formData) => (dispatch) => {
  axios.put(`/api/users/${id}`, formData).then((res) => dispatch(getUsers()));
};
export const removeUser = (id) => (dispatch) => {
  axios.delete(`/api/users/${id}`).then((res) => dispatch(getUsers()));
};