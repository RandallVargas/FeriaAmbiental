"use client"
import React from "react"
import CardGallery from './CardGallery'

import Slider  from "react-slick";

import {Swiper,SwiperSlide} from "swiper/react"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules'

import slide_image1 from "../assets/images/LOGO-TAPANTI-WEB.webp"
import slide_image2 from "../assets/images/LOGO-TAPANTI-WEB.webp"
import slide_image3 from "../assets/images/LOGO-TAPANTI-WEB.webp"
import slide_image4 from "../assets/images/LOGO-TAPANTI-WEB.webp"
import slide_image5 from "../assets/images/NoPicture.webp"
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

const Gallery =()=>{
    return(
      <section className="container mt-48  ">

    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        slidesPerView={'3'}
         coverflowEffect={{
        rotate: 9,
        stretch: 500,
        depth: 200,
         modifier: 2.5,
         slideShadows:true,

        }}
     pagination={{ el: '.swiper-pagination', clickable: true }}
     navigation={{
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
       clickable: true,
     }}
     modules={[EffectCoverflow, Pagination, Navigation]}
     className="swiper_container"
    >
      
     <SwiperSlide ><CardGallery image={slide_image1.src}/></SwiperSlide>
      <SwiperSlide><CardGallery image={slide_image2.src}/></SwiperSlide>
      <SwiperSlide><CardGallery image={slide_image3.src}/></SwiperSlide>
      <SwiperSlide><CardGallery image={slide_image4.src}/></SwiperSlide>
      <SwiperSlide><CardGallery image={slide_image5.src}/></SwiperSlide>
      <SwiperSlide><CardGallery image={slide_image1.src}/></SwiperSlide>
      <SwiperSlide><CardGallery image={slide_image1.src}/></SwiperSlide>
      <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
     
    </Swiper>
    </section>
    )
   
}

export default Gallery