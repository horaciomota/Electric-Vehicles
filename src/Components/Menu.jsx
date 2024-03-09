import React from 'react';
import '../Styles/Menu/Menu.modules.scss';
import logo from "../Images/logo.png";

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
        </div>
    );
}

export default Menu;
