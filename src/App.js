import React from 'react'
import LandingPage from '../src/Components/LandingPage'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Carousel/Carousel'
import MovieData from './Components/MovieData'
import MovieDetail from './Components/OnclickPage/MovieDetail'
import Home from './Components/Home'
// import PostList from './Components/PostList'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App