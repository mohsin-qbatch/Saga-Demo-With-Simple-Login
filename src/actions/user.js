export const REQUEST_USER_LOGIN = "REQUEST_USER_LOGIN";
export const RESPONSE_USER_LOGIN = "RESPONSE_USER_LOGIN";

export const responseUserLogin = ({ isLoggedIn }) => ({ type: RESPONSE_USER_LOGIN, payload: { isLoggedIn } });

export const requestUserLogin = ({ username, password }) => {
    console.log('requestUserLogin')
    return { type: REQUEST_USER_LOGIN, payload: { username, password } }
}
