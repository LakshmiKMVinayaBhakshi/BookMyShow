import React from 'react';
 
const ProductCard = ({ id,title, poster_path, handleMovieClick}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
        <>
 
            <div style={{display:'flex',flexDirection:'column',}} onClick={() => handleMovieClick(id)}>
           <h1 style={{ width:'200px',height:'50px'}}>{title}</h1>
        <img src={imageUrl} style={{ width:'200px',height:'300px'}}/>
        </div>

        </>
    );
};

export default ProductCard;