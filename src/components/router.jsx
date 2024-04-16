import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './header-new/header'
import Movies from './movies-new/movies'
import Navbar from './navbar-new/navbar'
import Cardfilms from './pages-new/Cardfilms.jsx'

function Router() {
  return (
    <div>
        {/* <Header/> */}
        <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/card/:cardID' element={<Cardfilms/>}/>
        <Route path='/cards/:cardID' element={<Movies/>}/> 
        </Routes>
    </div>
  )
}

export default Router