import axios from "axios";

// Getting CSRF-token
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");

// Put CSRF-token for all requests
axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

export const api = axios.create({
baseURL: "http://localhost:3000/api/v1",
    headers: {
    "Content-Type": "application/json",
    },
})