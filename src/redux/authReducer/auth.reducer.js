import {
  POST_LOGIN_USER_FAILURE,
  POST_LOGIN_USER_REQUEST,
  POST_LOGIN_USER_SUCCESS,
  POST_REGISTER_USER_FAILURE,
  POST_REGISTER_USER_REQUEST,
  POST_REGISTER_USER_SUCCESS,
  POST_LOGIN_OTP_REQUEST,
  POST_LOGIN_OTP_FAILURE,
  POST_LOGIN_OTP_SUCCESS,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_FAILURE,
  GET_USER_DETAILS_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  registerInfo: "",
  otp: "",
  token: "waiting",
  userDetails:{}
};

export const reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case POST_REGISTER_USER_REQUEST:
      return { ...state, isLoading: true };
    case POST_REGISTER_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_REGISTER_USER_SUCCESS:
      return { ...state, isLoading: false, registerInfo: payload };

    case POST_LOGIN_USER_REQUEST:
      return { ...state, isLoading: true };
    case POST_LOGIN_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_LOGIN_USER_SUCCESS:
      return { ...state, isLoading: false, otp: payload.message };

    case POST_LOGIN_OTP_REQUEST:
      return { ...state, isLoading: true };
    case POST_LOGIN_OTP_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_LOGIN_OTP_SUCCESS:
      return { ...state, isLoading: false, token: payload.message };
      case GET_USER_DETAILS_REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_DETAILS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_USER_DETAILS_SUCCESS:
      return { ...state, isLoading: false, userDetails: payload };
    
    default:
      return state;
  }
};
