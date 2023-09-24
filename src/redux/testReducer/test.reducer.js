import * as types from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  questions: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case types.GET_TEST_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_TEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.GET_TEST_SUCCESS:
      return { ...state, isLoading: false, questions: payload };
    default:
      return state;
  }
};
