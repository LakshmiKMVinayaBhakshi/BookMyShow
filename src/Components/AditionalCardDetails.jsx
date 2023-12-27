import React, { useState,useEffect } from 'react'
import {useParams} from 'react-roter-dom';
const AditionalCardDetails = () => {
    const [currentMovieDetail, setMovie] = useState()
    const {id} = useParams()
    useEffect ( () => {
    getProducts()
        
    },[])

    async function getProducts() {

        const res = await fetch ("https://api.themoviedb.org/3/movie/{id}?api_key=3035a2e62fc23afedb7da1c6546b79a9")
        const productList = await res.json()
        setMovie(productList)
        console.log(productList);
}
};

export default AditionalCardDetails
