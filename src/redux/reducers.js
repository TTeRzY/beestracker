import { combineReducers } from "redux";
import { beehivesReducer } from "./beehives";
import { apiariesReducer } from "./apiaries";
import { currentUserReducer } from "./user/index.js";

export default combineReducers({
    currentUser: currentUserReducer,
    apiaries: apiariesReducer,
    beehives: beehivesReducer,
})