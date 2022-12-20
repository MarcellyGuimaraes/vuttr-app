import axios from 'axios'

const api = axios.create({
  baseURL: 'https://vuttr-api.onrender.com',
})

export default api
