import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as activityReducer } from "./activityReducer/reducer";
import { reducer as testReducer } from "./testReducer/test.reducer";
import { reducer as authReducer } from "./authReducer/auth.reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  activityReducer,
  testReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
