import axios from "axios";
// import useToken from "../hooks/useToken";

var header = localStorage.getItem('access_token') ? {'Authorization': 'Bearer ' + localStorage.getItem('access_token'), "Content-Type": "application/json", } : {"Content-Type": "application/json",};

const instance = axios.create({
    baseURL: 'http://api.payemi.net/',
    timeout: 15000,
    headers: header
});

instance.interceptors.request.use(function (config) {
    if (!!config.data) {
        for (let key of Object.keys(config?.data)) {
            if (config.data[key] === "")
                config.data[key] = null
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status === 200) {
        return response.data;
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;