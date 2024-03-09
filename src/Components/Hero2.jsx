import '../Styles/Hero/Hero.modules.scss'
import herobg from "../Images/header-line-home-back2.png"
import thumbnail from "../Images/thumbnail1.png"

function Hero2() {
    return (
        <>
       <div className="Hero2">
        <img src={herobg.src} alt="Hero Background" className="HeroBG" />
        <img src={thumbnail.src} alt="Thumbnail" className="thumbnail" />
      </div>
        </>
      );  
}

export default Hero2;