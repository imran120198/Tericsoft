import * as types from "./actionTypes";

export const getdata = (route) => (dispatch) => {
  dispatch({ type: types.DATA_REQUEST });
  fetch(`https://outstanding-blue-frock.cyclic.app/${route}`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: types.DATA_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: types.DATA_FAILURE }));
};
