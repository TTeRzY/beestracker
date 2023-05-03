import actionTypes from './action-types';

export function beehivesReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.SET_BEEHIVES:
            return [...action.payload];
        default:
            return state;
    }
}