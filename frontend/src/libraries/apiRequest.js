import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://realestate-onw9.onrender.com",
    // baseURL: "http://localhost:8800",
    withCredentials: true
})

export default apiRequest;