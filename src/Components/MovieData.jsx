import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../Components/MovieData.css'
import Slider from 'react-slick'

const MovieData = () => {
    const [products, updateProducts] = useState([])

    useEffect ( () => {
        getProducts()
        // return getProducts()
        // console.log(getProducts());
    },[])

    async function getProducts() {

        const res = await fetch ("https://api.themoviedb.org/3/movie/now_playing?api_key=3035a2e62fc23afedb7da1c6546b79a9")
        const productList = await res.json()
        updateProducts(productList.results)
        console.log(productList.results);


    }

    if (products.length === 0) {
        return (<h2>Fetching data ...</h2>)
    }
    return (
        <>
        {/* <Slider 
        infinite={true}
        slidesToShow={5}
        autoplay={false}
        autoplaySpeed={1000}
        > */}
        <div className='movie-cards-api'>


                {products.map((p) => <Card {...p} key={p.id} className='movie-card' />)}

        </div>
        {/* </Slider> */}
        </>
    );
}

export default MovieData