import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { SearchBar, TextCard, MoviesCard, CardFilm } from "./movies-style";
import { useParams } from "react-router";
import Navbar from "../navbar-new/navbar";

function Movies() {
  const { filmid } = useParams();
  const [movie, setMovies] = useState([]);
  const [search, setSearch] = useState([]);

  const GetMovies = () => {
    const MoviePOP = "/discover/movie?sort_by=popularity.desc&";
    const API_KEY = "api_key=6ccf56e0b118a83f92286b3259dc9f85&language=ru";
    const MoviesBase = "https://api.themoviedb.org/3";
    axios
      .get(MoviesBase + MoviePOP + API_KEY)
      .then((res) => {
        console.log(res.data);
        const result = res.data.results;
        setMovies(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetSearch = () => {
    const SearchURL =
      "https://api.themoviedb.org/3/search/movie?&api_key=6ccf56e0b118a83f92286b3259dc9f85&language=ru&query=";
    axios
      .get(SearchURL + search)
      .then((res) => {
        console.log(res.data.results);
        const result = res.data.results;
        setMovies(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetMovies();
  }, [setMovies]);

  const SearchTerm = (e) => {
    e.preventDefault();
    GetSearch();
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const getColor = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div>
      <Navbar />
      <MoviesCard>
        {movie.length > 0 &&
          movie.map(({ id, title, vote_average, poster_path }, value) => {
            const ImgLink = "https://image.tmdb.org/t/p/w500/";
            console.log(id);
            return (
              <Link to={`/card/${id}`}>
                <CardFilm key={id}>
                  <img src={ImgLink + poster_path} alt="" />

                  <TextCard>
                    <p className="title">{title}</p>
                    <p className={getColor}>{vote_average}</p>
                  </TextCard>
                </CardFilm>
              </Link>
            );
          })}
      </MoviesCard>
      <Outlet />
    </div>
  );
}

export default Movies;
