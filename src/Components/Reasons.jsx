import '../Styles/Reason/Reason.modules.scss'
import ReasonCard from "./ReasonCard";
import reason1 from "../Images/reason1.png"
import reason2 from "../Images/reason2.png"
import reason3 from "../Images/reason3.png"


function Reasons() {
    return ( 
        <>
        <div className="reasons-section">
            <div className="container">
                <div className='reason-txt'>
                <ReasonCard
                imageUrl={reason1.src}
                title="Feel electric"
                text="Never worry about your next charge with island-wide chargepoints and vehicle swap options when yours is running low."
                />

                <ReasonCard
                imageUrl={reason2.src}
                title="Pay on your terms"
                text="Pay only for the time you need, from a minute to a month, giving you the ability to take short excusions or one-way journeys."
                />

                <ReasonCard
                imageUrl={reason3.src}
                title="Ultimately accessible"
                text="Pick up and drop off vehicles at, or near to where you are staying, saving you time and money travelling to a rental location."
                />
            </div>
            </div>
        </div>
        </>
     );
}

export default Reasons;