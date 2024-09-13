import React, { useState } from 'react'

function LikeButton() {
    let [isLiked,setLiked] = useState(false);
    let togalButton = ()=>{
        setLiked(!isLiked);
    }
  return (
  
        <div className="flex flex-col items-center justify-center gap-6  ">
            <div className="w-80 h-28 bg-zinc-200 rounded flex items-center justify-between px-4  ">
                <div className="w-32 h-20 bg-zinc-500 rounded object-cover overflow-hidden object-center">
                    <img src="https://images.unsplash.com/photo-1725137359224-b2a84b2c1a28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D" alt="" />
                </div>
                    <button onClick={togalButton} className={`px-6 py-2 rounded ${isLiked? "bg-pink-600" : "bg-zinc-400"} text-white font-semibold text-sm`}>{isLiked? <h2>Liked</h2>: <h2>like</h2>}
                        
                    </button>
            </div>

        </div>
    
  )
}

export default LikeButton