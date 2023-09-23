import axios from "axios";
import {
  GET_ACTIVITIES_FAILURE,
  GET_ACTIVITIES_REQUEST,
  GET_ACTIVITIES_SUCCESS,
} from "../actionTypes";

export const getActivities = (params) => (dispatch) => {
  dispatch({ type: GET_ACTIVITIES_REQUEST });
  axios
    .get("https://dash-board.up.railway.app/activities", params && params)
    .then((res) => {
      console.log(params);
      console.log(res.data);
      dispatch({ type: GET_ACTIVITIES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_ACTIVITIES_FAILURE });
    });
};
