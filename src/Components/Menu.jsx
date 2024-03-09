import React from 'react';
import '../Styles/Menu/Menu.modules.scss';
import logo from "../Images/logo.png";
import qrcode from "../Images/qrcode.png";

function Menu() {
    return (
        <div className="menu">
        <img src={logo.src} alt="Logo" className="logo" />
        <ul className="menu-items">
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#vehicles">Vehicles</a></li>
            <li><a href="#apps">Apps</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='qrcode-container'>
        <img src={qrcode.src} alt="Get the app" className="qrcode" />
        <span className="qrcode-label">Get the app</span>
        </div>
    </div>
    );
}

export default Menu;
