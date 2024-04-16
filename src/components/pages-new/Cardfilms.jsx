import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CardWrap,
  FilmId,
  FilmsFlex,
  FilmImg,
  FilmsId,
  RemoveAdvertisingS,
  PlayButton,
  MoreFilm,
  MoreCards,
} from "./cardfilms.js";
import FilmVideoImg from "../../img/logo.png";
import Navbar from "../navbar-new/navbar.jsx";
// import { useParams } from 'react-router';
import Advertising from "../../img/advertising.mp4";
import CommentPage from "../comment/commentPage.jsx";
import { SearchBar } from "../movies-new/movies-style.js";
function Cardfilms() {
  let { cardID } = useParams();
  const [films, setFilms] = useState();
  const MoviePOP = "/discover/movie?sort_by=popularity.desc&";
  const API_KEY = "?api_key=6ccf56e0b118a83f92286b3259dc9f85&language=ru";
  const MoviesBase = "https://api.themoviedb.org/3/movie/";
  const GetApi = () => {
    axios
      .get(MoviesBase + cardID + API_KEY)
      .then((res) => {
        console.log(res.data);
        const result = res.data;
        setFilms(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(films);
  useEffect(() => {
    GetApi();
  }, []);
  const [PlayAdvertisingVideo, setPlayAdvertisingVideo] = useState({
    playFilm: false,
  });
  const [BackVideo, setBackVideo] = useState({
    BackFilm: FilmVideoImg,
  });
  const [times, settimes] = useState({
    timeAd: 10,
    timetext: "skip",
  });
  const [id, setid] = useState({
    idtime: true,
  });
  let timeSecond = 10;
  console.log(timeSecond);
  const nextVideo = () => {
    if (id.idtime === true) {
      PlayAdvertising();
      setid({ idtime: false });
    } else if (id.idtime === false) {
      alert("No film sorry!!!");
    }
  };
  const PlayAdvertising = () => {
    setPlayAdvertisingVideo({ playFilm: true });
    setBackVideo({ BackFilm: "" });
    const countDown = setInterval(() => {
      let truetime = times.timeAd--;
      const timeH = document.getElementById("second");
      timeSecond--;
      timeH.innerHTML = timeSecond;
      if (times.timeAd === 0) {
        timeSecond = "skip";
        timeH.innerHTML = timeSecond;
      }
      if (times.timeAd <= 0 || times.timeAd < 1) {
        clearInterval(countDown);
      }
      settimes({ timeAd: truetime, timeSee: true });
      if (truetime <= 0 || truetime < 1) {
        clearInterval(countDown);
      }
      if (timeSecond <= 0 || timeSecond < 1) {
        timeSecond = 0;
      }
    }, 1000);
  };
  const removeAd = () => {
    setPlayAdvertisingVideo({ playFilm: false });
    setBackVideo({ BackFilm: FilmVideoImg });
    timeSecond = "";
    const timeH = document.getElementById("second");
    timeH.innerHTML = timeSecond;
  };
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
  console.log(movie);
  return (
    <CardWrap>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <Navbar />
      <FilmsFlex>
        <FilmId>
          <FilmImg style={{ backgroundImage: `url(${BackVideo.BackFilm})` }}>
            <PlayButton>
              <i onClick={nextVideo} class="fas fa-play"></i>
            </PlayButton>
            {PlayAdvertisingVideo.playFilm ? (
              <>
                <a href="https://www.youtube.com/channel/UCjffFokXHHbCaOeLJPbac-w">
                  <video autoPlay controls src={Advertising}></video>
                </a>
              </>
            ) : (
              ""
            )}
            <RemoveAdvertisingS onClick={removeAd} id="second">
              {timeSecond}
            </RemoveAdvertisingS>
          </FilmImg>
          <p className="filmstitle">{films?.title}</p>
          <p className="filmsover">{films?.overview}</p>
          <br />
          <br />
          <CommentPage />
        </FilmId>
        <MoreFilm>
          <MoreCards>
            {movie.length > 0 &&
              movie.map(
                ({ id, title, vote_average, poster_path, overview }, value) => {
                  const ImgLink = "https://image.tmdb.org/t/p/w500/";
                  console.log(id);
                  return (
                    <Link
                      style={{ display: "flex", textDecoration: "none" }}
                      to={`/cards/${id}`}
                    >
                      <div className="film" key={id}>
                        <img src={ImgLink + poster_path} alt="" />
                      </div>
                      <div className="text">
                        <p className="title">{title}</p>
                        <i class=" fa-solid fa-star">
                          <span className={getColor}> {vote_average}</span>
                        </i>
                        <p className="over">{overview}</p>
                      </div>
                    </Link>
                  );
                }
              )}
          </MoreCards>
        </MoreFilm>
      </FilmsFlex>
    </CardWrap>
  );
}
export default Cardfilms;
