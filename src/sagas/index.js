import { takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_PERSONS } from "../actions/persons";
import { REQUEST_HELLO_WORLD } from "../actions/helloWorld";
import { REQUEST_USER_LOGIN } from '../actions/user'
import helloWorld from './helloWorld';
import getPersons from './persons';
import checkUserLogin from './user';

export default function* mySaga() {
  yield takeEvery(REQUEST_HELLO_WORLD, helloWorld);
  yield takeLatest(REQUEST_PERSONS, getPersons);
  yield takeLatest(REQUEST_USER_LOGIN, checkUserLogin);
}
