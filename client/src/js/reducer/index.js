import { GET_USERS, ADD_USER } from "../ActionTypes";
const initialState = {
  users: [],
  loading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, loading: false, users: payload };
    case ADD_USER:
      return { ...state, users: [payload, ...state.users] };
    default:
      return state;
  }
};
