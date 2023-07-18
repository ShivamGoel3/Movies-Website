import React from 'react';
import {  Routes, Route} from "react-router-dom";
import './App.css';
import { Container } from '@material-ui/core';
import Header from './component/Header/Header';
import SimpleBottomNavigation from "./component/MainNav";
import Trending from './pages/Trending/Trending'
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
function Home() {
  return (
    < div>
      <Header />
      <div className='app'>
        <Container>
          
          <Routes>
          <Route path='/' element={<Trending/>}  />
          <Route path='/movies' element={<Movies/>}  />

          <Route path='/series' element={<Series/>}  />
          <Route path='/search' element={<Search/>}  />

            </Routes>

        </Container>
      </div>

      <SimpleBottomNavigation />
      </div>
  );

}

export default Home;

