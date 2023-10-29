import Link from "next/link";
import NavLink from "./NavLink"



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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-30">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                
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