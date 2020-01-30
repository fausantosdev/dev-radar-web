import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dev-radar-api-0.herokuapp.com'
})

export default api