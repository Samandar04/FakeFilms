import React from 'react'
import MoviesPage from '../movies-new/movies'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom"


import Navbar from '../navbar-new/navbar'
import Header from '../header-new/header'
function NewsPage() {
    return (
<>
        <Navbar/>
        <Header/>
     <MoviesPage/>

        </>
    )
}

export default NewsPage