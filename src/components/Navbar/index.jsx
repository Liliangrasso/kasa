
/* Import */

import React from "react";
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from '../../logo.svg'
import styled from 'styled-components'
import colors from "../../utils/colors/color";
import { useLocation } from "react-router-dom";

/* Styles */

const HeaderContainer = styled.header`
    padding: 20px;
    display: flex;
    align-items: center;
`
const StyledLink = styled(Link)`
    padding: 10px;
    color: ${colors.primary};
    text-decoration: none;
    font-size: 19px;
    @media (min-width: 450px){
        font-size: 20px; 
    }
`
const NavContainer = styled.nav`
    position: absolute;
    right: 20px
`

/* Liens */
const LINKS = [
    { name: "Acceuil", path: "/" },
    { name: "A Propos", path: "/about" },
]

function Navbar(){

    // Récupération de la location
    let location = useLocation();
    
    return (
        <HeaderContainer>
            <Logo className="logoNav" />
            <NavContainer>
                {LINKS.map((link) => (
                    <StyledLink 
                        key={link.name}
                        to={link.path}
                        style={{
                            textDecoration:
                                link.path === location.pathname ? "underline" : "none",
                        }}
                    >
                        {link.name}
                    </StyledLink>
                ))}
            </NavContainer>
        </HeaderContainer>
    )
}

export default Navbar;