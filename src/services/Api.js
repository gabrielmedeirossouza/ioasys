import axios from 'axios'

const api = axios.create({
  baseURL: 'https://empresas.ioasys.com.br/api/v1'
})

api.interceptors.request.use(config => {
  try {
    const accessToken = localStorage.getItem('access-token')
    const client = localStorage.getItem('client')
    const uid = localStorage.getItem('uid')

    if (accessToken && client && uid) {
      config.headers['access-token'] = accessToken
      config.headers['client'] = client
      config.headers['uid'] = uid
    }

    return config
  } catch (err) {
    console.log(`Services API error: ${err}`)
  }
})

export default api
