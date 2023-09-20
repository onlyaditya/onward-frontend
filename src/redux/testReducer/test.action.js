import axios from "axios";
import * as types from "../actionTypes"

export const getTestQuestions = (dispatch) => {
  dispatch({ type: types.GET_TEST_REQUEST });
  axios
    .get("https://dash-board.up.railway.app/msat")
    .then((res) => {
      // console.log(res);
      // console.log(res.data);
      dispatch({ type: types.GET_TEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_TEST_FAILURE });
    });
};
