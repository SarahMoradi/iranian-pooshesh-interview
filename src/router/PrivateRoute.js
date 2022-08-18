import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = localStorage.getItem('auth')
  return <>{auth ? <Outlet /> : <Navigate to='/login' />}</>
}
export default PrivateRoute
