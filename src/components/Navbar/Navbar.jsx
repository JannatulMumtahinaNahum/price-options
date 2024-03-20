import { useState } from "react";
import Link from "../LInk/Link";
import { MdMenuOpen , MdOutlineClose  } from "react-icons/md";

const Navbar = () => {


    const [open , setOpen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/profile', name: 'Profile', id: 5 }
      ];
      


    return (
        <nav className="p-6">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <MdOutlineClose className="text-3xl"></MdOutlineClose> :  <MdMenuOpen className="text-3xl"></MdMenuOpen>
                }
           
            </div>
           <ul className={`md:flex 
           ${open ? '' : 'hidden'}
           absolute md:static px-6`}>
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>

        </nav>
    );
};

export default Navbar;