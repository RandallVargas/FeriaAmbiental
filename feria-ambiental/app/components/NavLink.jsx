import Link from "next/link";

export default function NavLink({href,title}){

  return(
    <>
    
    <Link href={href} className="block py-3 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-7 hover:text-white ml-0">
           {title}
        </Link>
        
        </>
        
    );
};

