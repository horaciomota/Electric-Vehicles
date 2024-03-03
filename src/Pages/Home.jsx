import CarDetails from "@/Components/CarsDetails"

export default function Home() {
    return (
        <>
        <CarDetails
        title="Yoyo"
        monthlyFee="0"
        unlockFee="1.50"
        perMinute="0.70"
        perHour="35"
        perDay="175"
        collisionDamage="Optional $3 per hour collision damage waiver, capped at $15 per day"
        rentalInfo="Rentals will not exceed $35 per hour or $175 per day (excluding the optional collision damage waiver). Rentals that exceed 5 hrs will be charged the daily rate."
        />
        </>
    )
}