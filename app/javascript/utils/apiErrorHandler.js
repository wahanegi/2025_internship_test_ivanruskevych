import {toast} from "react-toastify";

export const apiErrorHandler = (err)=> {
    if (err.response) {
        const errMessage = err.response.data.error;
        toast.error(errMessage);
    } else if (err.request) {
        toast.error("Something went wrong. Please try again later.");
    } else {
        toast.error("Unknown error. Please try again later.");
    }
}