import React from 'react';
import '../OnclickPage/ProductCard.css'

const ProductCard = ({ id,title, poster_path, handleMovieClick}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
        <>
<div className='whole-movie-cards'>
        <div  style={{display:'flex',flexDirection:'column', }} onClick={() => handleMovieClick(id)}>
        <img className='api-movie-cards-main'  src={imageUrl} style={{ width:'200px',height:'300px'}}/>
        <h1 className='movie-title' style={{ width:'200px',height:'50px'}}>{title}</h1>
        </div>
</div>
        </>
    );
};

export default ProductCard;