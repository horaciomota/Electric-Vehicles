import '../Styles/PinkWave/PinkWave.modules.scss'
import pinkwave from '../Images/pinkwave.png'

export default function PinkWave() {
    return (
        <>
        <img src={pinkwave.src} alt="Pink Wave showing icons" className='PinkWave' />
        </>
    )
}