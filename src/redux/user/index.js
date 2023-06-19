import { actionTypes } from './action-types';

export function currentUserReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            return action.payload;
        default:
            return state;
    }
}