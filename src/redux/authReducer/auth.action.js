import axios from "axios";
import {
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

export const Checkotp = (data, otpobj) => (dispatch) => {
  console.log("i am otp", data, otpobj);
  dispatch({ type: POST_LOGIN_OTP_REQUEST });
  return axios
    .post(`https://dash-board.up.railway.app/log-in?otp=${data}`, otpobj)
    .then((res) => {
      console.log("i am res", res.data.message);
      if (res.data.message != "wrong otp") {
        console.log(res.data.message);
        localStorage.setItem("user", JSON.stringify(res.data.message));
      }
      dispatch({ type: POST_LOGIN_OTP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_LOGIN_OTP_FAILURE, payload: err });
    });
};
