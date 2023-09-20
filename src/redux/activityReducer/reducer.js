import {
  GET_ACTIVITIES_FAILURE,
  GET_ACTIVITIES_REQUEST,
  GET_ACTIVITIES_SUCCESS,
  POST_LOGIN_USER_FAILURE,
  POST_LOGIN_USER_REQUEST,
  POST_LOGIN_USER_SUCCESS,
  POST_REGISTER_USER_FAILURE,
  POST_REGISTER_USER_REQUEST,
  POST_REGISTER_USER_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  activities: [],
  registerInfo: "",
  otp: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case GET_ACTIVITIES_REQUEST:
      return { ...state, isLoading: true };
    case GET_ACTIVITIES_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_ACTIVITIES_SUCCESS:
      return { ...state, isLoading: false, activities: payload };

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
      return { ...state, isLoading: false, otp: payload };
    default:
      return state;
  }
};
