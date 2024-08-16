import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://realestate-backend-mern.vercel.app/api",
    withCredentials: true,
})

export default apiRequest;