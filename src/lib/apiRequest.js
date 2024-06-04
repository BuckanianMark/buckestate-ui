import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://real-estate-prisma-api.onrender.com/api",
    //baseURL:"http://localhost:8080/api",
    withCredentials:true
})
export default apiRequest