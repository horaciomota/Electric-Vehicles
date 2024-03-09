import React from 'react';

const ReasonCard = ({ title, text, imageUrl }) => {
    return (
        <div className="reasonComponent">
            <img src={imageUrl} alt={title} />
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
}

export default ReasonCard;