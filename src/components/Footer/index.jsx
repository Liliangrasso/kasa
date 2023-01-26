/* Import */

import React from "react";
import Logo from '../../logo.svg';

function Footer(){
    return (
        <footer className="footerContainer">
            <img  className="footerLogo" src={Logo} alt="Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;