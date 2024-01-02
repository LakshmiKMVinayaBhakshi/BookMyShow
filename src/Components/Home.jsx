import React from 'react'
import LandingPage from './LandingPage'
import Carousel from './Carousel/Carousel'
import APIHome from './OnclickPage/APIHome'
import Footer from './Footer/Footer'
import AddImage from './AddImage'
import AddImageTwo from './AddImageTwo'

const Home = () => {
return (
    <>
    <LandingPage/>
    <Carousel/>
    <AddImage/>
    <APIHome/>
    <AddImageTwo/>
    <Footer/>
    </>
)
}

export default Home