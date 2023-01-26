/* Import */

import React from "react";
import {Link} from "react-router-dom";
import Logo from '../../logo.svg';
import { useLocation } from "react-router-dom";


/* Liens */
const LINKS = [
    { name: "Acceuil", path: "/" },
    { name: "A Propos", path: "/about" },
]

function Navbar(){

    // Récupération de la location
    let location = useLocation();
    
    return (
        <header className="headerContainer">
            <nav className="navContainer">
            <img className="navLogo" src={Logo} alt="Logo" />
                <div className="linkContainer">
                    {LINKS.map((link) => (
                        <Link 
                            key={link.name}
                            to={link.path}
                            style={{
                                textDecoration:
                                    link.path === location.pathname ? "underline" : "none",
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;