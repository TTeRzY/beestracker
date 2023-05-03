import { actionTypes } from './action-types';

export function apiariesReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.SET_APIARIES:
            return [...action.payload];
        default:
            return state;
    }
}