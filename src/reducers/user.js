import { RESPONSE_USER_LOGIN } from "../actions/user";

const initialState = {
  fetching: false,
  username: '',
  password: '',
  isLoggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case RESPONSE_USER_LOGIN: {

      return {
        ...state,
        fetching: false,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export default user;
