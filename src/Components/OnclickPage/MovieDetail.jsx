import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../OnclickPage/MovieDetails.css'

const MovieDetail = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {getProducts()}, [id]);

    async function getProducts() {

        const res = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=3035a2e62fc23afedb7da1c6546b79a9`)
        const productList = await res.json()
        setMovieDetails(productList)
    }

    if (!movieDetails) {
        return <h2>Loading...</h2>;
    }
    const  settings = {
        backgroundImage:`linear-gradient(90deg, rgb(26, 26, 26) 24.97%,
        rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, 
        rgb(26, 26, 26) 100%), url(https://image.tmdb.org/t/p/w500${movieDetails.poster_path})`,
        width:'100%',
    }
    return (
        <>
        
        
        <div className='main-div-details' style={settings} >
            <div className='movie-detail-img'>

            <img  src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}></img>
            </div>
            <div className='movie-detail'>
            <h1  >{movieDetails.title}</h1>
            <button className='book-button'>BOOK TICKETS</button>
            </div>

        </div>
        </>
    );
};

export default MovieDetail;