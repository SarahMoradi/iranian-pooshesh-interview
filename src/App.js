import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from '../src/components/dashboard'
import Login from './components/authentication/Login'
import PrivateRoute from './router/PrivateRoute'
import { ToastContainer } from 'react-toastify'
import VisitForm from './components/visit-form'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} exact />
          <Route path='/login' element={<Login />} />
          <Route exact path='/visit-form' element={<PrivateRoute />}>
            <Route exact path='/visit-form' element={<VisitForm />} />
          </Route>
          <Route path='*' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer rtl={true} />
    </div>
  )
}

export default App
