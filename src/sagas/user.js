import { call, put } from "redux-saga/effects";
import { responseUserLogin } from "../actions/user";
import checkUserExists from './checkUserLogin';
// const checkUserExists = (username, password) => {
//     return axios({
//         method : "POST",
//         url : 'http://localhost:3002/testPost',
//         data : { username, password }
//     });
// }

function* checkUserLogin(action) {
  try {
    const { username, password } = action.payload;
    // console.log({ username, password });
    const isLoggedIn = yield call(checkUserExists, username, password );
    yield put(responseUserLogin(isLoggedIn.data));

  } catch (e) {
    yield put(responseUserLogin(false));
  }
}

export default checkUserLogin;