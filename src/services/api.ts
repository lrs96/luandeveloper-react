import axios from 'axios';

const api = axios.create({
    baseURL: 'https://luan-developer-ws.herokuapp.com/'
})

export default api;