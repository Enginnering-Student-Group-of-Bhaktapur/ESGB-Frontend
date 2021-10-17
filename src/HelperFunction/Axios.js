import axios from 'axios';
// http://localhost:8000 is added automatically due to proxy key in package.json
const baseURL = "/api";

const axiosInstance = axios.create({
    baseURL : baseURL,  
});

export default axiosInstance;