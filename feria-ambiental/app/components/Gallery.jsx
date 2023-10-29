
import React from "react"
import CardGallery from './CardGallery'
import { useClient } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Gallery =()=>{

    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return(
        <>
        {/* <div className="text-white  ">
            <h2>Gallery</h2> */}
            <div>
            <h2>Custom Paging</h2>
            {/* <Slider {...settings}> */}
            <CardGallery  image={"/images/water.webp"}/>
            <CardGallery image={"/images/tp.webp"}/>
            <CardGallery image={"/images/NoPicture.webp"}/>
            <CardGallery image={"/images/NoPicture.webp"}/>
            <CardGallery image={"/images/NoPicture.webp"}/>
            <CardGallery image={"/images/NoPicture.webp"}/>
            <CardGallery image={"/images/NoPicture.webp"}/>
            <CardGallery image={"/images/NoPicture.webp"}/>
            <CardGallery image={"/images/NoPicture.webp"}/>
             <CardGallery image={"/images/NoPicture.webp"}/>
             {/* </Slider> */}
            </div>
            
        {/* </div> */}
      
        </>
    )
}

export default Gallery