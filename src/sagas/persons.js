import { call, put } from "redux-saga/effects";

import { receivePersons } from "../actions/persons";

const Api = (url) => fetch(url).then(response => response.json());

function* getPersons(action) {
    try {
      // do api call
      
      const person = yield call(Api, 'https://swapi.co/api/people/');
      const { results } = person;
      console.log({results});
      yield put(receivePersons(results));
    } catch (e) {
      console.log('Err ::: getPersonsGenerator', e);
    }
  }

export default getPersons;