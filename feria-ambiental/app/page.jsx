import {Navigation} from './components/Navigation'
import AboutSection from "./components/AboutSection"
import Gallery from "./components/Gallery"
import Sponsorships from './components/Sponsorships'
import StandsCard from './components/StandsCards'
import Footer from './components/Footer'
import Image from 'next/image'

export default function HomePage(){
    
return(
    <main className='bg-image'  >
       <div className="bg-fixed h-screen pt-10  bg-slate-50" style={{ 
            backgroundImage: `url(/images/Fondo.webp)`,
            backgroundSize: '100%' }}>
            
                <div >
                
    <Navigation/>
  

    <AboutSection/>
    </div>
     
    <Image
              src="/svgs/wave.svg"
              alt="wave"
              width={100}
              height={50}
              className=' w-screen h-auto absolute -bottom-44 '
              />
    </div>
   
    <div className=' flex justify-center' >
    <Gallery/>
    </div>
    <h1 className='text-white'>Stands</h1>
    {/* <div className=' grid grid-rows-2 grid-flow-col gap-4 bg-orange-400 ' > */}
    <StandsCard/>
        
    {/* </div> */}
        
    <br/>
   
    <h1 className='text-white'>Organizadores</h1>
    <div className='h-[350px]'></div>
    <h1 className='text-white'>Patrocinios</h1>
    <div className='h-[350px] bg-gray-900 justify-center   '>
        <Sponsorships/>
        
    </div>
    {/* <h1 className='text-white'>Contacto</h1>
    <div className='h-[350px] bg-orange-800'>   
           </div> */}
    <h1 className='text-white'>PiedePagina</h1>
    
        <div> <Footer/></div>
       
   

</main>
    
    
   
  
    
)

}