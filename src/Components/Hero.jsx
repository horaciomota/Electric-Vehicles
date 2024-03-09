import '../Styles/Hero/Hero.modules.scss'
import herobg from "../Images/hero-bg.png"

import Hero2 from './Hero2';
import Hero1 from './Hero1';
import Menu from './Menu';

function Hero() {
    return ( 
        <>
        <div className="Hero-section" style={{backgroundImage: `url(${herobg.src})`}}>
            <Menu/>
            <Hero1/>
            <Hero2/>
        </div>
        </>
     );
}

export default Hero;