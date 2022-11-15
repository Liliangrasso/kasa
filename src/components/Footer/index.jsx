/* Import */

import React from "react";
import styled from 'styled-components'
import {ReactComponent as Logo} from '../../logo.svg'

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


function Footer(){
    return (
        <FooterContainer>
            <Logo className="logoFooter" />
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterContainer>
    )
}

export default Footer;