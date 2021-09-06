const { default: axios } = require("axios");

module.exports = {
    IP: '3.37.245.109',
    PORT: '3000',
    AxiosInstance: axios.create({
        baseURL: 'http://3.37.245.109:3000/',
        timeout: 1000,
    })
}