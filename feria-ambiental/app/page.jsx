import {Navigation} from './components/Navigation'
import AboutSection from "./components/AboutSection"
import Gallery from "./components/Gallery"

export default function HomePage(){
return(
    <main >
    <Navigation/>
    <div className="container mt-24 ">
    <h1 className="text-2xl text-white">Feria Ambiental</h1>
    <AboutSection/>
    <Gallery/>
    </div>
    

</main>
    
    
   
  
    
)

}