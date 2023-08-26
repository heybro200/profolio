import { useState } from 'react';


export const DigitalClock = () => {
    let time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        let time  = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000)
    return (
        <div>
            <h1>Time: {currentTime}</h1>
        </div>
        
    )
    
}

export default DigitalClock;