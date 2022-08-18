import Axios from '../custom/Axios'

const LoginApi = (data) => Axios.post('/api/token/', data)
export { LoginApi }
