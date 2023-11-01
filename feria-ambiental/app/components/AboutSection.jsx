import Image from "next/image"
import React from "react"

const AboutSection =()=>{
return(
    <section id="AboutSection" className="text-white  mt-16 ">
       <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:p">
        <div>
        <h2 className="text-4xl font-bold text-white mb-4">Feria Ambiental</h2>
        <p className="text-base md:text-lg text-justify">La 1º FERIA BIOCULTURAL TAPANTÍ promueve la conservación ambiental y 
        el ecoturismo responsable por medio de la educación, inspiración y conexión de las personas con la naturaleza y
        la vida cultural de la comunidad.<br/><br/>  
        Se realizará en dos días para conmemorar la creación del Parque Nacional Tapantí, 
        el 13 y 14 de enero de 2024, en la Plaza de deportes de Orosi, Paraíso, Cartago. 
        Participarán vecinos de la comunidad, artesanos, instituciones del cantón, entre otros … con sus respectivos servicios 
        y productos en función de impulsar la participación comunitaria, atraer visitantes locales, nacionales e internacionales
        al Parque Nacional y fomentar el ecoturismo sostenible. 
</p>

        </div>
       
       </div>
    </section>
)

}

export default AboutSection