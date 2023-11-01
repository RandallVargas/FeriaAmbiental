import React from "react";


const CardGallery =({image})=>{
    return(
        <span className=" relative shadow-lg text-white rounded-xl px-6 py-8 h-[350px] w-[350px] lg:h-[700px] lg:w-[700px]  ">
                 {/* <div className='absolute inset-4 rounded-xl  bg-contain bg-center' style={{backgroundImage: `url(${image})`}}> */}
                 <img className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl  h-[350px] w-[350px] lg:h-[600px] lg:w-[700px]" src={image} alt="slide_image" />
                {/* </div> */}
      
      </span>
      
    )
}

export default CardGallery