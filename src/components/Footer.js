import React from 'react';
import '../styles/Footer.css';

function Footer()
{
    return(
        <div className="footer">
            <ul className="footer-menu">
            <li><a href="#" className="footerlink">About Us</a></li>
            <li><a href="#" className="footerlink">Facebook</a></li>
            <li><a href="#" className="footerlink">Twitter X</a></li>
            <li><a href="#" className="footerlink">Instagram</a></li>
            </ul>
            <hr></hr>
            <p><marquee>&copy; 2024 Junaid Jamshed. All rights reserved.</marquee></p>
        </div>
        );
}

export default Footer;