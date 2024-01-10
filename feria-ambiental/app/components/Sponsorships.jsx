"use client"
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SponsorCard from "./SponsorCard";
import 'swiper/css';
//import data from '../data/sponsordata.json'


import { Autoplay} from 'swiper/modules';
const Sponsorships =()=>{
    const [slidesPerView, setSlidesPerView] = useState('5');
    const [sponsorData, setSponsorData] = useState([]);
    const updateSlidesPerView = () => {
        if (window.innerWidth <= 1000) {
          setSlidesPerView('1');
        } else if(window.innerWidth <= 1300) {
          setSlidesPerView('3');
        }else{
            setSlidesPerView('5');
        }
      };
      useEffect(() => {
        updateSlidesPerView(); // Llama a la función al cargar la página
        window.addEventListener('resize', updateSlidesPerView);
    
        return () => {
          window.removeEventListener('resize', updateSlidesPerView); // Limpia el evento cuando el componente se desmonta
        };
      }, []);

      useEffect(() => {
        // Carga los datos desde el archivo JSON
        fetch('/data/sponsordata.json') // Ajusta la ruta al archivo JSON
          .then((response) => response.json())
          .then((data) => setSponsorData(data))
          .catch((error) => console.error(error));
      }, []);
    return(

     
        <Swiper id="sponsor"
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
      
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        

    {sponsorData.map((sponsor, index) => (
        <SwiperSlide key={index} id="sponsor-Slide">
    
            <SponsorCard data={sponsor.url} />
        
        </SwiperSlide>
      ))}
      </Swiper>
        
    )
}
export default Sponsorships