import React, { useState } from 'react'
 
function LudoBoard() {

  let [moves, setMoves]= useState({blue: 0, red: 0, green: 0, yellow: 0 });

  let updateBlue = ()=>{    
    setMoves({...moves, blue: moves.blue += 1});
  }
  let updateYellow = ()=>{    
    setMoves({...moves, yellow: moves.yellow += 1});
  }
  let updateRed = ()=>{    
    setMoves({...moves, red: moves.red += 1});
  }
  let updateGreen = ()=>{    
    setMoves({...moves, green: moves.green += 1});
  }
  return (
    <div>
      <h1 className="font-semibold text-white uppercase text-3xl mb-4 w-80">Ludo Board</h1>
      <div className="bg-zinc-200 flex flex-col gap-2 items-start pl-4 rounded py-4">

        <p className='font-bold text-xl'>Blue Moves = {moves.blue}</p>
        <button className='px-8 py-2 bg-blue-500 rounded-full text-white font-semibold' onClick={updateBlue}>+1</button>

        <p className='font-bold text-xl'>Yellow Moves = {moves.yellow}</p>
        <button className='px-8 py-2 bg-yellow-500 rounded-full text-white font-semibold' onClick={updateYellow}>+1</button>

        <p className='font-bold text-xl'>Green Moves = {moves.green}</p>
        <button className='px-8 py-2 bg-green-500 rounded-full text-white font-semibold ' onClick={updateGreen}>+1</button>

        <p className='font-bold text-xl'>Red Moves = {moves.red}</p>
        <button className='px-8 py-2 bg-red-500 rounded-full text-white font-semibold ' onClick={updateRed}>+1</button>

      </div>
    </div>
  )
}

export default LudoBoard