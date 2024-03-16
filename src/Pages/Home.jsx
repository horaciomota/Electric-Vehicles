import Hero from "@/Components/Hero"
import CarDetails from "@/Components/CarsDetails"
import RideandRelax from "@/Components/RideandRelex"
import PinkWave from "@/Components/PinkWave"
import Reasons from "@/Components/Reasons"
import PurpleWave from "@/Components/PurpleWave"
import Follow from "@/Components/Follow"
import StartToday from "@/Components/StartToday"

export default function Home() {
    return (
        <>
        <Hero/>
        <StartToday/>
        <PinkWave/>
        <CarDetails/>
        <RideandRelax/>
        <Reasons/>
        <PurpleWave/>
        <Follow/> 
        </>
    )
}