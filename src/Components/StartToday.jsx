import '../Styles/StartToday/StartTodau.modules.scss'
import startpic from "../Images/start-pic.png"

function StartToday() {
    return ( 
        <>
        <div className='StartToday-section'>
            <div className='container'>
                <img src={startpic.src} alt="woman-standing-in-front-of-car" className='Start-img'/>
                <div className='Start-txt'>
                    <h2>Start your electric motor!</h2>
                    <h3>Begin using Current in three simple steps</h3>
                    <div className='txt-list'>
                    
                    <div className='txt-group'>
                    <span className='teste'>1</span>
                    <p>Get your adventure underway. Download our app and register an account in a few minutes with your driver's licence and credit card.</p>    
                    </div>   
                    <div className='txt-group'>
                    <span>2</span>
                    <p>Discover Bermuda! Our electric vehicles are conveniently dotted all over the island waiting for you to pick one up. Choose to book 'Now', or schedule a vehicle for 'Later'.</p>
                    </div>
                    <div className='txt-group'>
                    <span>3</span>
                    <p>Let your hair down. Everything is controlled through the app, from booking to billing allowing you to rent whenever, wherever.</p>  
                    </div>
                     </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default StartToday;