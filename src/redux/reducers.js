import { combineReducers } from "redux";
import { beehivesReducer } from "./beehives";
import { apiariesReducer } from "./apiaries";

export default combineReducers({
    apiaries: apiariesReducer,
    beehives: beehivesReducer,
})