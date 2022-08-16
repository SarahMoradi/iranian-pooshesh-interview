import AuthAxios from '../custom/AuthAxios'
import Axios from '../custom/Axios'

const Login = (data) => Axios.post('/api/token/', data)

export { Login }
