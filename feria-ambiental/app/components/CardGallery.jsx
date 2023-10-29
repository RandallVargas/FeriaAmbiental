import React from "react";


const CardGallery =({image})=>{
    return(
        <span className=" relative shadow-lg text-white rounded-xl px-6 py-8 h-[350px] w-[315px] lg:h-[500px] lg:w-[450px]  ">
                 {/* <div className='absolute inset-4 rounded-xl  bg-contain bg-center' style={{backgroundImage: `url(${image})`}}> */}
                 <img className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl  h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]" src={image} alt="" />
                {/* </div> */}
      
      </span>
      
    )
}

export default CardGallery