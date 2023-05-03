import axios from "axios";
import { actionTypes } from "./action-types";

/* SETTERS */

export function setApiaries(value) {
    return {
        type: actionTypes.SET_APIARIES,
        payload: value,
    }
}

/* GETTERS */

export function getApiaries() {
    return async (dispatch) => {
        try {
            axios.get('../apiaries.json')
                .then(response => response.data)
                .then(response => {
                    dispatch(setApiaries(response?.data ?? []))
                })
        } catch (error) {
            console.log(error);
        }
    }
}