import axios from "axios";
import { toast } from "react-toastify";

const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");

const api = axios.create({
    baseURL: "/api/v1",
    headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
    },
});

// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         const message = error.response?.data?.error || "Unknown error occurred";
//         toast.error(message);
//         return Promise.reject(error);
//     }
// );

export const httpService = {
    get: api.get,
    post: api.post,
    put: api.put,
    delete: api.delete,
};
