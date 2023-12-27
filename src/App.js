import React from 'react'
import LandingPage from '../src/Components/LandingPage'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Carousel/Carousel'
import MovieData from './Components/MovieData'
// import PostList from './Components/PostList'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<LandingPage/>} />
      {/* <Route path='/' exact element={<Footer/>}/> */}
      {/* <Route path='/slideshow' exact element = {<MovieSlideshow/>}/> */}
      </Routes>
      </BrowserRouter>
      {/* <MovieSlideshow/> */}
      <Carousel/>
      {/* <PostList/> */}
      <MovieData/>
      <Footer/>
    </div>
  )
}

export default App