import { React, lazy} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Auth/Register'
import Weblayout from './layouts/Weblayout'
import Applyloan from './pages/Auth/Applyloan'
import Dashboard from './pages/Admin/Dashboard'



import { Suspense } from 'react'
const Contact=lazy(()=>import('./pages/Contact'))
const Login=lazy(()=>import('./pages/Auth/Login'))
const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback='                   Loading..'>
    <Routes>
      <Route element={<Weblayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/application' element={<Applyloan/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App