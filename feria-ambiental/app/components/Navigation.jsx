import Link from "next/link";
import NavLink from "./NavLink"



const navLinks=[
    {
        title: "Acerca de",
        path: "#about",
    },
    {
        title: "Galeria",
        path: "#organizadores",
    },
    {
        title: "Stands",
        path: "#organizadores",
    },
    {
        title: "Organizadores",
        path: "#organizadores",
    },
    {
        title: "Patrocinios",
        path: "#organizadores",
    }, 
     {
        title: "Contacto",
        path: "#organizadores",
    },

];
export  function Navigation(){

    return(
        <header>
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap intems 0 center justify-between mx-auto ">
                <Link href={"/"} className="text-lg md:text-5xl text-white font-semibold"> 
                LOGO
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