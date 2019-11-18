import { RECEIVE_HELLO_WORLD } from "../actions/helloWorld";

const initialState = {
  fetching: false,
  text: ''
};

const helloWorld = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_HELLO_WORLD: {

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

export default helloWorld;
