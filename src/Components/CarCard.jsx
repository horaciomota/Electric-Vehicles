import React from 'react';

export default function CarCard({ className, carimg, title, monthlyFee, unlockFee, perMinute, perHour, perDay, collisionDamage, rentalInfo, backgroundColor, titleColor }) {
    return (
        <div className={`${className}`} style={{ backgroundColor: backgroundColor }}>
            <img className="carImage" src={carimg} alt="Choose a car" />
            <h1 style={{ color: titleColor }}>{title}</h1> 
            <p>${monthlyFee} monthly fee</p>
            <p>${unlockFee} to unlock</p>
            <p>${perMinute} per minute</p>
            <p>${perHour} per hour</p>
            <p>${perDay} per day (24 hrs)</p>
            <span>{collisionDamage}</span>
            <span>{rentalInfo}</span>
        </div>
    );
}
