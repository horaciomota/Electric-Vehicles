import React from 'react';
import CarCard from './CarCard';
import '../Styles/CarsDetails/CarsDetails.modules.scss';

import car1 from "../Images/car1.png"
import car2 from "../Images/car2.png"
import car3 from "../Images/car3.png"


export default function CarDetails() {
    return (
        <section className="CarDetails-section">
            <div className="container">
                
                <div className='car-txt'>
                <h1>Simple pricing</h1>
                <h2>Flexible costs to meet your budget</h2>
                </div>

                <div className='cardpost'>
            <CarCard className="carCard carCard1" 
                    carimg={car1.src}
                    title="Yoyo"
                    monthlyFee="0"
                    unlockFee="1.50"
                    perMinute="0.70"
                    perHour="35"
                    perDay="175"
                    collisionDamage="Optional $3 per hour collision damage waiver, capped at $15 per day"
                    rentalInfo="Rentals will not exceed $35 per hour or $175 per day (excluding the optional collision damage waiver). Rentals that exceed 5 hrs will be charged the daily rate."
                    titleColor="#019999" 
               />

            <CarCard className="carCard carCard2" 
                carimg={car2.src}  
                title="Ami"
                monthlyFee="0"
                unlockFee="1.50"
                perMinute="0.50"
                perHour="30"
                perDay="150"
                collisionDamage="Optional $3 per hour collision damage waiver, capped at $15 per day"
                rentalInfo="Rentals will not exceed $30 per hour or $150 per day (excluding the optional collision damage waiver). Rentals that exceed 5 hrs will be charged the daily rate."
                titleColor="#262642" 
           />

            <CarCard className="carCard carCard3"
                carimg={car3.src}
                title="Twizy"
                monthlyFee="0"
                unlockFee="1.50"
                perMinute="0.50"
                perHour="26"
                perDay="130"
                collisionDamage="Optional $3 per hour collision damage waiver, capped at $15 per day"
                rentalInfo="Rentals will not exceed $26 per hour or $130 per day (excluding the optional collision damage waiver). Rentals that exceed 5 hrs will be charged the daily rate."
                titleColor="#FE3399" 
            />
            </div>
            </div>
        </section>
    )
}
