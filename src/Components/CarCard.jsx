import React from 'react';

export default function CarCard({ titleColor ,carimg ,title, monthlyFee, unlockFee, perMinute, perHour, perDay, collisionDamage, rentalInfo }) {
    return (
        <div className="carCard">
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