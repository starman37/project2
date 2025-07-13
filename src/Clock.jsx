import {useState, useEffect} from 'react'

const Clock = () => {

    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',   // Show hours (like 05, 12)
        minute: '2-digit', // Show minutes (like 53, 01)
        second: '2-digit', // Show seconds (like 24, 07)
        hour12: true       // <-- THIS IS THE MAGIC! It adds AM or PM
    });
  return (
    <div className='text-white text-9xl'>
      {formattedTime}
    </div>
  )
}

export default Clock
