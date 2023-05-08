import actionTypes from "./action-types";
import axios from "axios";

/* SETTERS */

export function setBeeHives(value) {
    return {
        type: actionTypes.SET_BEEHIVES,
        payload: value,
    }
}

/* GETTERS */

export function getBeeHives() {
    return async (dispatch) => {
        try {
            axios.get('../beehives.json')
                .then(response => response.data)
                .then(response => {
                    dispatch(setBeeHives(response?.data ?? []))
                })
        } catch (error) {
            console.log(error);
        }
    }
}