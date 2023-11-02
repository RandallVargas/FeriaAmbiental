import Link from "next/link";
import NavLink from "./NavLink"
import Image from "next/image";
import logo from "../assets/images/LOGO-TAPANTI-WEB.webp"

const navLinks=[
    {
        title: "Acerca de",
        path: "#AboutSection",
    },
    {
        title: "Galeria",
        path: "#gallery",
    },
    {
        title: "Stands",
        path: "#stands",
    },
    {
        title: "Organizadores",
        path: "#organizers",
    },
    {
        title: "Patrocinios",
        path: "#sponsorships",
    }, 
     {
        title: "Contacto",
        path: "#contact",
    },

];
export  function Navigation(){

    return(
        <header>
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap intems 0 center justify-between mx-auto ">
                <Link href={"/"} className="text-lg md:text-5xl text-white font-semibold"> 
                {/* <img src={logo.src} className='h-20 w-30' ></img> */}
                <Image
              src="/svgs/LOGO-TAPANTI.svg"
              alt="wave"
              width={100}
              height={50}
            //   className=' w-auto h-auto absolute bottom-auto left-0'
              />
                </Link>
               
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 mm:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link,index)=>(
                            <li key={index}>
                                <NavLink href={link.path} title ={link.title}/>
                            </li>
                           ))}
                    </ul>
                </div>
            </div>
        </nav>
        </header>
    )

}