import React, { useState } from 'react'
 
function LudoBoard() {

  let [moves, setMoves]= useState({blue: 0, red: 0, green: 0, yellow: 0 });
  let [arr,setArr] = useState(["blue moves"])

  let updateBlue1 = ()=>{    
    setMoves({...moves, blue: moves.blue += 1});
    
    // array in states

    
    // setArr((prevArr)=>{
    //   return [...prevArr, "blue moves"];
    // })

  }
  let updateBlue2 = ()=>{    
    setMoves({...moves, blue: moves.blue -= 1});
    arr.pop([moves.blue])
  }
  let updateYellow1 = ()=>{    
    setMoves({...moves, yellow: moves.yellow += 1});
  }
  let updateYellow2 = ()=>{    
    setMoves({...moves, yellow: moves.yellow -= 1});
  }
  let updateRed1 = ()=>{    
    setMoves({...moves, red: moves.red += 1});
  }
  let updateRed2 = ()=>{    
    setMoves({...moves, red: moves.red -= 1});
  }
  let updateGreen1 = ()=>{    
    setMoves({...moves, green: moves.green += 1});
  }
  let updateGreen2 = ()=>{    
    setMoves({...moves, green: moves.green -= 1});
  }
  return (
    <div>
      <h1 className="font-semibold text-white uppercase text-3xl mb-4 w-80">Ludo Board</h1>
      <p>{arr}</p>
      <div className="bg-zinc-200 flex flex-col gap-2 items-start pl-4 rounded py-4">

        {/* <p className='font-bold text-xl'>Blue Moves = {moves.blue}</p> */}
        <div className="flex gap-2">
        <button className='px-8 py-2 bg-blue-500 rounded-full text-white font-semibold' onClick={updateBlue1}>+1</button>
        <button className='px-8 py-2 bg-blue-300 rounded-full text-white font-semibold' onClick={updateBlue2}>-1</button>
        </div>

        <p className='font-bold text-xl'>Yellow Moves = {moves.yellow}</p>
        <div className="flex gap-2">
        <button className='px-8 py-2 bg-yellow-500 rounded-full text-white font-semibold' onClick={updateYellow1}>+1</button>
        <button className='px-8 py-2 bg-yellow-300 rounded-full text-white font-semibold' onClick={updateYellow2}>-1</button>
        </div>

        <p className='font-bold text-xl'>Green Moves = {moves.green}</p>
        <div className="flex gap-2">
        <button className='px-8 py-2 bg-green-500 rounded-full text-white font-semibold ' onClick={updateGreen1}>+1</button>
        <button className='px-8 py-2 bg-green-300 rounded-full text-white font-semibold ' onClick={updateGreen2}>-1</button>
        </div>

        <p className='font-bold text-xl'>Red Moves = {moves.red}</p>
        <div className="flex gap-2">
        <button className='px-8 py-2 bg-red-500 rounded-full text-white font-semibold ' onClick={updateRed1}>+1</button>
        <button className='px-8 py-2 bg-red-300 rounded-full text-white font-semibold ' onClick={updateRed2}>-1</button>
        </div>

      </div>
    </div>
  )
}

export default LudoBoard