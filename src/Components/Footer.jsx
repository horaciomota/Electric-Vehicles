import instagramLogo from "../Images/InstagramLogo.png"
import footerline from "../Images/footer-line-pink-back 1.png"
import frame from "../Images/Frame.png"
import character from "../Images/character.png"

import '../Styles/Footer/Footer.modules.scss'

export default function Footer() {
    return (
    <>
    <div className="Footer-frame">
    <img src={frame.src} alt="Frame on footer section" className='PinkWave'/>
    <img src={footerline.src} alt="footerline on footer section" className='PinkWave footerline'/>
    </div>
    <div className="footer">
        <div className="container">
        <div className="footer-bigger-menu">
            <h1>How it works</h1>
            <h1>Vehicles</h1>
            <h1>Apps</h1>
            <h1>Contact</h1>
        </div>
        <img src={character.src} alt="character on footer section" className="character-footer"/>
        </div>
        <div className="container">
        <div className='footer-menu'>
                <img src={instagramLogo.src} alt="Instagram Logo" className="first-item" />
               <div className="footer-list">
                <p>Terms & conditions</p>
                <p>Privacy policy</p>
                <p>Cookie policy</p>
                <span>Current Vehicles Ltd. All rights reserved © 2022</span>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}