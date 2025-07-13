
import { useState, useEffect } from 'react'

const Counter = () => {
    const [age, setAge] = useState(0);
    const updateAge = () => {
        setAge(age => age+1);
    }
    const declineAge = () => {
        setAge(age => age-1);
    }
    const resetAge = () => {
        setAge(age => 0);
    }

    const colors = [
    'bg-blue-400',
    'bg-violet-400',
    'bg-purple-400',
    'bg-red-400',
    'bg-pink-400',
    'bg-indigo-400',
  ];
    const [colorIn, setcolorIn] = useState(0)
    const changeColor = () => {
      if (colorIn != 5) {
      setcolorIn(colorIn => colorIn+1);
      }
      if (colorIn == 5) {
        setcolorIn(colorIn => 0)
      }
    }



  return (
    <div className={`flex justify-center items-center w-screen h-screen`}>
    <div className='space-y-5 border-amber-700 rounded-full'>
      <p className='w-40 text-center  p-3 rounded-full bg-gray-600 text-2xl text-white'>{age}</p>
      <button onClick={updateAge} className='w-40 block  rounded-full bg-gray-600 hover:bg-gray-800 cursor-pointer p-3 text-2xl text-white'>Count up</button>
      <button onClick={declineAge} className='w-40 block  rounded-full bg-gray-600 hover:bg-gray-800 cursor-pointer p-3 text-2xl text-white'>Count down</button>
      <button onClick={resetAge} className='w-40 block rounded-full bg-gray-600 hover:bg-gray-800 cursor-pointer p-3 text-2xl text-white'>Reset</button>
      
    </div>
    </div>
  )
}

export default Counter;
