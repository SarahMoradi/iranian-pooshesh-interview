import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import Login from './components/authentication/Login'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className='App'>
      <Login />
      <ToastContainer rtl={true} />
    </div>
  )
}

export default App
