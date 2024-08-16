import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://realestate-onw9.onrender.com/api",
    withCredentials: true,
})

export default apiRequest;