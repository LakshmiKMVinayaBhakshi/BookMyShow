import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../OnclickPage/APIHome.css'
 
const APIHome = () => {
    const [products, updateProducts] = useState([])
    const navigate = useNavigate();
 
    useEffect ( () => {getProducts()},[])
 
    const handleMovieClick = (id) => {navigate(`/movie/${id}`);};
 
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
        <div>
    <h1 className='cards-heading'>Recommended Movies</h1>
    
    </div>
    
        <div style={{display:'flex',flexDirection:'row', overflow:'scroll', gap:"10px"}} 
        className='api-movie-cards-main'>
        { products.map((p) => <ProductCard {...p} key={p.id} handleMovieClick={handleMovieClick}/>)}
        </div>
        </>
    );
};

export default APIHome;