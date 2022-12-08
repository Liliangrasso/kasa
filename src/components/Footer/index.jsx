/* Import */

import React from "react";
import styled from 'styled-components';
import Logo from '../../logo.svg';

/* Styles */

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #000000;
    color: white;
    max-width: 100%;
`
const FooterLogo = styled.img`
    height: 40px;
    filter:brightness(10);
`

//<Logo className="logoFooter" />
function Footer(){
    return (
        <FooterContainer>
            <FooterLogo src={Logo} />
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterContainer>
    )
}

export default Footer;