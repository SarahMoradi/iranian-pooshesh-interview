import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import Dashboard from '../src/components/dashboard'
import { Fragment } from 'react'
import Login from './components/authentication/Login'
import PrivateRoute from './router/PrivateRoute'
import { ToastContainer } from 'react-toastify'
import VisitForm from './components/visit-form'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/visit-form' element={<VisitForm />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer rtl={true} />
    </div>
  )
}

export default App
