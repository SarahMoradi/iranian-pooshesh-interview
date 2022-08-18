import { BASE_URL } from './BaseURL'
import axios from 'axios'

const validToken ='jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYxMzM2MDY2LCJpYXQiOjE2NjA0NzIwNjYsImp0aSI6IjJjZDRiY2FlNzA4YzRiZTc4YWY0YTU0MmY0MWM2ODZmIiwidXNlcl9pZCI6Njh9.dWNGRLfNnU3DlIpNIfT2qqSoB5qE-pTXKTP8dp4_lqk'
const axios_instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

axios_instance.interceptors.request.use(function (config) {
  config.headers.Authorization = `${validToken}`
  return config
})

export default axios_instance
