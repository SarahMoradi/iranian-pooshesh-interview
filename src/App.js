import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import Dashboard from '../src/components/dashboard'
import Login from './components/authentication/Login'
import PrivateRoute from './router/PrivateRoute'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className='App'>
      {/* <Login /> */}
      <Dashboard />
      <ToastContainer rtl={true} />
    </div>
  )
}

export default App
