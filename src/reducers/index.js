import { combineReducers } from "redux";

import helloWorld from "./helloWorld";
import persons from "./persons";
import user from './user';

export default combineReducers({
  helloWorld,
  persons,
  user
});
