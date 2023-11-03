import React from "react";
const SponsorCard =({data})=>{
    return(
      <div className="border-solid border-4 border-neutral-700  relative w-56 h-56  transform rotate-45" >
             <img className="" src={data} alt="slide_image" />
           
      </div>
      
    )
}

export default SponsorCard