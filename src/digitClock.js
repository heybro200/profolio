import { useState } from 'react';
import {BsClock} from 'react-icons/bs'


export const DigitalClock = () => {
    let time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        let time  = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000)
    return (
        <div className='flex align-top'>
            <BsClock className='mr-2 h-9'/>
            <h5 className='text-xl py-2'>{currentTime}</h5>
        </div>
        
    )
    
}

export default DigitalClock;