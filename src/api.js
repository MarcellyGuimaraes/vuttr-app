import axios from 'axios'

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/MarcellyGuimaraes/vuttr-app-api',
})

export default api
