const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'http://localhost:1337/api/',
});

module.exports = axiosInstance;