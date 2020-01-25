import axios from 'axios'

const api = axios.create({
  baseURL: 'https://omnistack10be.herokuapp.com'
})

export default api