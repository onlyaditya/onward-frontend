import axios from "axios";
import {
  GET_ACTIVITIES_FAILURE,
  GET_ACTIVITIES_REQUEST,
  GET_ACTIVITIES_SUCCESS,
  POST_REGISTER_USER_REQUEST,
  POST_REGISTER_USER_FAILURE,
  POST_REGISTER_USER_SUCCESS,
  POST_LOGIN_USER_REQUEST,
  POST_LOGIN_USER_FAILURE,
  POST_LOGIN_USER_SUCCESS,
  POST_LOGIN_OTP_REQUEST,
  POST_LOGIN_OTP_FAILURE,
  POST_LOGIN_OTP_SUCCESS,
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

export const postregister = (data) => (dispatch) => {
  dispatch({ type: POST_REGISTER_USER_REQUEST });
  return axios
    .post("https://dash-board.up.railway.app/register", data)
    .then((res) => {
      dispatch({ type: POST_REGISTER_USER_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      dispatch({ type: POST_REGISTER_USER_FAILURE, payload: err });
    });
};

export const login = (data) => (dispatch) => {
  dispatch({ type: POST_LOGIN_USER_REQUEST });
  return axios
    .post("https://dash-board.up.railway.app/log-in", data)
    .then((res) => {
      dispatch({ type: POST_LOGIN_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_LOGIN_USER_FAILURE, payload: err });
    });
};

export const Checkotp = (data) => (dispatch) => {
  console.log("i am otp", data);
  dispatch({ type: POST_LOGIN_OTP_REQUEST });
  return axios
    .post(`https://dash-board.up.railway.app/log-in`, data)
    .then((res) => {
      console.log("i am res", res);
      dispatch({ type: POST_LOGIN_OTP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_LOGIN_OTP_FAILURE, payload: err });
    });
};
