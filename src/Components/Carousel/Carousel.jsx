
import React, { useEffect, useState } from 'react';
import '../Carousel/Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderImg } from '../../dummydata';



const Carousel = () => {
  
  return (
    
    <div>
    <Slider 
    infinite={true}
    slidesToShow={1}
    autoplay={true}
    autoplaySpeed={1000}
    >

      {sliderImg.map((data)=>(
        
          <img  className='slider-img' src={data.img}></img>
        
      ))}
      
      
    </Slider>
    
</div>
  
  );
};

export default Carousel;
