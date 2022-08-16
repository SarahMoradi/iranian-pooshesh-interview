import { BASE_URL } from './BaseURL'
import axios from 'axios'

const axios_instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

axios_instance.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem('access-token'))
    ? JSON.parse(localStorage.getItem('access-token'))
    : null

  config.headers.Authorization = `Bearer ${token}`

  return config
})

export default axios_instance
