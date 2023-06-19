import axios from "axios";
import { actionTypes } from "./action-types";

/* SETTERS */

export function setCurrentUser(value) {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: value,
    }
}

/* GETTERS */

// export function getCurrentUser() {
//     return async (dispatch) => {
//         try {
//             axios.get('../apiaries.json')
//                 .then(response => response.data)
//                 .then(response => {
//                     dispatch(setApiaries(response?.data ?? []))
//                 })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }