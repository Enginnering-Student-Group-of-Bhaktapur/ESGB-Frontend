import axios from 'axios';

const baseURL = "http://127.0.0.1:8000/api";
// const baseURL = "https://ensgb.herokuapp.com/api";

const axiosInstance = axios.create({
    baseURL : baseURL,  
});

export default axiosInstance;