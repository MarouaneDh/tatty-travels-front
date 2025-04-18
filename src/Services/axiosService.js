import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Get token
        const token = localStorage.getItem('token')
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

const axiosService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};
export default axiosService;