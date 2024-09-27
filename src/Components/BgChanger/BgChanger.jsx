import React, { useState } from 'react'

function BgChanger() {
  const [color,setColor] = useState('purple')

  function ChangeColor(color){
    setColor(color);
  }
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-4' style={{background: color}}>
        <div className="text-semibold text-2xl uppercase">
            <p>lets Change The BackGround Color</p>
        </div>
        <div className="flex justify-center items-center gap-2">
            <button className='px-6 py-2 rounded-md bg-red-400 text-sm' onClick={() => ChangeColor('red')}>Red</button>
            <button className='px-6 py-2 rounded-md bg-green-400 text-sm' onClick={() => ChangeColor('green')}>Green</button>
            <button className='px-6 py-2 rounded-md bg-blue-400 text-sm' onClick={() => ChangeColor('blue')}>Blue</button>
            <button className='px-6 py-2 rounded-md bg-pink-400 text-sm' onClick={() => ChangeColor('pink')}>pink</button>
            <button className='px-6 py-2 rounded-md bg-yellow-400 text-sm' onClick={() => ChangeColor('yellow')}>yellow</button>
        </div>
    </div>
  )
}

export default BgChanger