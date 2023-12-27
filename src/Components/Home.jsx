import React from 'react'
import LandingPage from './LandingPage'
import Carousel from './Carousel/Carousel'
import APIHome from './OnclickPage/APIHome'
import Footer from './Footer/Footer'
import AddImage from './AddImage'

const Home = () => {
return (
    <>
    <LandingPage/>
    <Carousel/>
    <AddImage/>
    <APIHome/>
    <AddImage/>
    <Footer/>
    </>
)
}

export default Home