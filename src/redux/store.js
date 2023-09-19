import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as activityReducer } from "./activityReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  activityReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
