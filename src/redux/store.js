import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as activityReducer } from "./activityReducer/reducer";
import {reducer as testReducer} from "./testReducer/test.reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  activityReducer,
  testReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
