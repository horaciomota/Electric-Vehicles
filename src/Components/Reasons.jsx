import ReasonCard from "./ReasonCard";

function Reasons() {
    return ( 
        <>
        <div className="reasons-section">
            <div className="container">
                <ReasonCard
                imageUrl="url_da_sua_imagem_aqui"
                title="Feel electric"
                text="Never worry about your next charge with island-wide chargepoints and vehicle swap options when yours is running low."
                />
            </div>
        </div>
        </>
     );
}

export default Reasons;