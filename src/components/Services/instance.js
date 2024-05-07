import axios from "axios";
//define the base url for the api
const baseURL = 'http://localhost:8000/api';

//define the instance
const authInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

//define the protected instance
const protectedInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

//define the interceptor for the protected instance
protectedInstance.interceptors.request.use (
    config => {
        const token = sessionStorage.getItem('token');
        if(token) {
            config.headers['Authorization'] = 'bearer ' + token;
        } 
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

export default {
    authInstance,
    protectedInstance,
}