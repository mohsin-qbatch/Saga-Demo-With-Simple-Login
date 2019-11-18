export const REQUEST_PERSONS = "REQUEST_PERSONS";
export const RECEIVE_PERSONS = "RECEIVE_PERSONS";

export const receivePersons = persons => ({ type: RECEIVE_PERSONS, payload: { persons } });

export const requestPersons = () => {
    console.log('requestPersons')
    return { type: REQUEST_PERSONS }
}
