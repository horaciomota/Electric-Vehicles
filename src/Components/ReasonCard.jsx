import React from 'react';

const ReasonCard = ({ title, text, imageUrl }) => {
    return (
        <div className="reasonComponent">
            <h1>{title}</h1>
            <p>{text}</p>
            <img src={imageUrl} alt={title} />
        </div>
    );
}

export default ReasonCard;