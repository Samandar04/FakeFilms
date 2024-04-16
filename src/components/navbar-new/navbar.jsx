import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarFlex, NavbarWrap, Textscroll } from './navbar-style'
import axios from 'axios'
import { SearchBar } from '../movies-new/movies-style'

function Navbar() {
    const [movie, setMovies] = useState([])
    const [search, setSearch] = useState([])
    const [text, settext] = useState({text:false})
    const GetSearch = () => {
        const SearchURL = ("https://api.themoviedb.org/3/search/movie?&api_key=6ccf56e0b118a83f92286b3259dc9f85&language=ru&query=")
        axios.get(SearchURL + search)
            .then((res) => {
                console.log(res.data.results);
                const result = res.data.results;
                setMovies(result)
            })
            .catch((err) => {
                console.log(err);
            })

    }
    const SearchTerm = (e) => {
        e.preventDefault();
        GetSearch();
    }


    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>         
                    <NavbarWrap>
                    <NavbarFlex>
                        <ul> 
                            <li>
                                <Link to="" className="link">
                                <a href=""> Home
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="link">
                                <a href=""> Category
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="link">
                                <a href=""> Top Rated
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="link">
                                <a href=""> About Us 
                                </a>
                                </Link>
                            </li>
                        </ul>
                    
                     
                    </NavbarFlex>
                    <SearchBar>
                <form onSubmit={SearchTerm}>
                    <input type="text"
                        name="search"
                        placeholder="Search"
                        value={search}
                        onChange={handleOnChange} />
                </form>
            </SearchBar>
                </NavbarWrap>
        </>

    )
}

export default Navbar