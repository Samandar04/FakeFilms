import logo from './logo.svg';
import './App.css';
import NewsPage from './components/news-page-new/news';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Cardfilms from './components/pages-new/Cardfilms.jsx';
import Navbar from './components/navbar-new/navbar';
import Movies from './components/movies-new/movies';
import Router from './components/router';
function App() {
  return (
    <div>
      <Router/>
      {/* <Movies/> */}
       {/* <Movies/>
      <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Movies/>}/>
        
        <Route path='cards' element={<Navbar/>}/>
      </Routes>
      </BrowserRouter> */}
     
      {/* <Movies/> */}
{/* <Cardfilms/> */}
{/* ssss */}
{/* <Navbar/> */}
    </div>
  );
}

export default App;
