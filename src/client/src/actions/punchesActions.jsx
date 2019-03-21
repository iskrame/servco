import axios from "axios";

export const fetchPunchesData = userData => dispatch => {
  axios
    // .post("/api/test", userData)
    .get("/api/test")
    .then(res => {
      // Set current user
      dispatch(setPunchesData(res));
      dispatch({ type: SET_PUNCHES_DATA, payload: {} });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setPunchesData = data => {
  return {
    type: SET_PUNCHES_DATA,
    payload: data
  };
};
