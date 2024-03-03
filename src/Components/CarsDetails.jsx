// CarDetails.js

import React from 'react';
import '../Styles/CarsDetails/CarsDetails.modules.scss';

export default function CarDetails({ title, monthlyFee, unlockFee, perMinute, perHour, perDay, collisionDamage, rentalInfo }) {
    return (
        <section className="CarDetails-section">
            <div className="container">
                <div className="carCard">
                    <h1>{title}</h1>
                    <p>${monthlyFee} monthly fee</p>
                    <p>${unlockFee} to unlock</p>
                    <p>${perMinute} per minute</p>
                    <p>${perHour} per hour</p>
                    <p>${perDay} per day (24 hrs)</p>
                    <span>{collisionDamage}</span>
                    <span>{rentalInfo}</span>
                </div>
            </div>
        </section>
    )
}
