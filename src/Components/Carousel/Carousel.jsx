// Carousel.jsx
import React, { useEffect, useState } from 'react';
// import { Carousel as ReactCarousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Carousel/Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderImg } from '../../dummydata';
import Card from '../Card';


const Carousel = () => {
  // const [moviedata , setData] = useState([]);
  // const [urldata,seturldata] = useState(url);
  // useEffect(()=>{
  //   fetch(urldata).then(res=>res.json()).then(data=>{
  //     // console.log(data.results);
  //     setData(data.results);

  //   })
  // },[urldata])
  

//   useEffect(()=>{
//     getMovieData();
// },[])

// async function  getMovieData (){
// try{


//   let res = await fetch(url);
//   let  movieList = await res.json();
//   setData(movieList);
//   console.log(movieList);
// }
// catch (error) {
//   console.error('Error fetching movie data:', error);
// }}
  return (
    
    <div>
    <Slider 
    infinite={true}
    slidesToShow={1}
    autoplay={true}
    autoplaySpeed={1000}
    >

      {sliderImg.map((data)=>(
        // <div className='slider-img'>
          <img  className='slider-img' src={data.img}></img>
        // </div>
      ))}
      
      
    </Slider>
    
<div>
  {/* <Slider 
    infinite={true}
    slidesToShow={10}
    autoplay={true}
    autoplaySpeed={1000}>
    {moviePoster.map((data)=>(
      <img className='slider-poster' src={data.img}></img>
    ))}
  </Slider> */}
  {/* <div>
    <div>
      {
        (moviedata.length == 0)?<p>Not Found</p>:moviedata.map((p)=>{
          return(
            <Card {...p } key={p.id}/>
          )
        })
      }
    </div>
  </div> */}
</div>
</div>
  
  );
};

export default Carousel;
