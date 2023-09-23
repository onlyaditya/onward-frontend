import {
  GET_ACTIVITIES_FAILURE,
  GET_ACTIVITIES_REQUEST,
  GET_ACTIVITIES_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  activities: [],
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

    default:
      return state;
  }
};
