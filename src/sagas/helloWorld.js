import { call, put } from "redux-saga/effects";

import { receiveHelloWorld } from "../actions/helloWorld";

const Api = (url) => fetch(url).then(response => response.json());

function* helloWorld(action) {
  try {
    // do api call
    const person = yield call(Api, 'https://swapi.co/api/people/');
    console.log({action});
    console.log({person});
    yield put(receiveHelloWorld("Hello world from redux saga!"));
  } catch (e) {
    console.log('Err ::: helloWorldGenerator', e);
  }
}

export default helloWorld;