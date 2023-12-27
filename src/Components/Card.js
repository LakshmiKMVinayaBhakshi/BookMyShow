import React from 'react'
import image from '../Images/card1.avif'
import  '../Components/Card.css' 

const Card = ({poster_path,vote_average,vote_count,title}) => {
  // console.log(movie.info);
  let img_path =`https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
    <div className='movie'>
      

        <img  className='cards' src={img_path}></img>
        <p className='vote_average' >{vote_average}</p>
        <p  className='vote_count'>{vote_count}</p>
        <h3 className='card-title'>{title}</h3>
        

        </div>
  {/* <div>
      <img className='bookNow-img' src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png'></img>
    </div> */}
    </>
  )
}

export default Card