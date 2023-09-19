import axios from "axios";
import {
  GET_ACTIVITIES_FAILURE,
  GET_ACTIVITIES_REQUEST,
  GET_ACTIVITIES_SUCCESS,
} from "../actionTypes";

export const getActivities = (dispatch) => {
  dispatch({ type: GET_ACTIVITIES_REQUEST });
  axios
    .get("https://dash-board.up.railway.app/activities")
    .then((res) => {
      dispatch({ type: GET_ACTIVITIES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_ACTIVITIES_FAILURE });
    });
};
