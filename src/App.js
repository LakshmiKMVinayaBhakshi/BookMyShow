import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MovieDetail from './Components/OnclickPage/MovieDetail'
import Home from './Components/Home'

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