import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || '',
  timeout: 10000
})

export default apiClient
