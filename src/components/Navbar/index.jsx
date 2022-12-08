
/* Import */

import React from "react";
import {Link} from "react-router-dom";
import Logo from '../../logo.svg';
import styled from 'styled-components'
import colors from "../../utils/colors/color";
import { useLocation } from "react-router-dom";

/* Styles */

const HeaderContainer = styled.header`
    padding-right: 4%;
    padding-left: 4%;
    padding-top: 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 1200px){
        padding-right: 5%;
        padding-left: 5%;
    }
    
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
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`
const NavLogo = styled.img`
    margin-bottom: 2%;
    @media (max-device-width: 375px) {
        max-width: 130px;
    }
    @media (max-width: 600px){
        max-width: 160px;
    }
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
            <NavLogo src={Logo} />
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