import axios from "axios";

const instance = axios.create({
    baseURL:"https://localhost:8433"
})
instance.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem("token")
    return config
})
export default instance