import '../Styles/Follow/Follow.modules.scss'
import picture1 from "../Images/followpic1.png"
import picture2 from "../Images/followpic2.png"
import bg from "../Images/Vector-bg.png"

function Follow() {
    return ( 
        <>
        <div className="Follow-section" style={{backgroundImage: `url(${bg.src})`,}}>
            <div className="container">
                <div className='follow-txt'>
                <h2>Follow us on social</h2>
                <h3>For the latest news, offers and travel inspiration</h3>
                <div className='follow-img'>
                <img src={picture1.src} alt="Follow us on social" />
                <img src={picture2.src} alt="Follow us on social" />
                </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Follow;