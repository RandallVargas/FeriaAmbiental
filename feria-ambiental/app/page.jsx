import {Navigation} from './components/Navigation'
import AboutSection from "./components/AboutSection"
import Gallery from "./components/Gallery"
import Sponsorships from './components/Sponsorships'
import Image from 'next/image'

export default function HomePage(){
    
return(
    <main className='bg-image'  >
       <div className="bg-fixed h-screen pt-10  bg-slate-50" style={{ 
            backgroundImage: `url(/images/FondoP.webp)`,
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
    <div className='h-[350px] bg-yellow-500'></div>
    
    <br/>
   
    <h1 className='text-white'>Organizadores</h1>
    <div className='h-[350px] bg-blue-700'></div>
    <h1 className='text-white'>Patrocinios</h1>
    <div className='h-[350px] bg-sky-800'></div>
    <h1 className='text-white'>Contacto</h1>
    <div className='h-[350px] bg-orange-800'>   
           </div>
    <h1 className='text-white'>PiedePagina</h1>
    
    <footer className='h-[350px] bg-sky-800'>
      
    </footer>

</main>
    
    
   
  
    
)

}