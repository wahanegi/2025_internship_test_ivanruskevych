import axios from "axios";

// Getting CSRF-token
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");

// Put CSRF-token for all requests
axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

export const api = axios.create({
baseURL: "/api/v1",
    headers: {
    "Content-Type": "application/json",
    },
})