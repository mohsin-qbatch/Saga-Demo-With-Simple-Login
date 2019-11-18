import { RECEIVE_PERSONS } from "../actions/persons";

const initialState = {
  fetching: false,
  persons: []
};

const persons = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PERSONS: {

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

export default persons;
