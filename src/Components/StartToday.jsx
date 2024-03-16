import '../Styles/StartToday/StartToday.modules.scss'

import playstore from "../Images/play.png"
import applestore from "../Images/Apple.png"
import startpic from "../Images/start-pic.png"

function StartToday() {
    return ( 
        <>
        <div className='StartToday-section'>
            <div className='container'>
                <img src={startpic.src} alt="woman-standing-in-front-of-car" className='Start-img'/>
                <div className='Start-txt'>
                    <h1>Start your electric motor!</h1>
                    <h2>Begin using Current in three simple steps</h2>
                   
                    <div className='txt-list'> 
                    <div className='txt-group'>
                    <span className='item1'>1</span>
                    <p>Get your adventure underway. Download our app and register an account in a few minutes with your driver's licence and credit card.</p>    
                    </div>   
                    <div className='txt-group'>
                    <span className='item2'>2</span>
                    <p>Discover Bermuda! Our electric vehicles are conveniently dotted all over the island waiting for you to pick one up. Choose to book 'Now', or schedule a vehicle for 'Later'.</p>
                    </div>
                    <div className='txt-group'>
                    <span className='item3'>3</span>
                    <p>Let your hair down. Everything is controlled through the app, from booking to billing allowing you to rent whenever, wherever.</p>  
                    </div>
                    <div className="buttons">
                     <button className="getAppButton todayButton">
                    <img src={applestore.src} alt="Apple store"/> App Store
                    </button>
                     <button className="getAppButton todayButton">
                     <img src={playstore.src} alt="Apple store"/> Play Store
                    </button>
                    </div>
                     </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default StartToday;