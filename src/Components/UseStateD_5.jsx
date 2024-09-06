import React, { useState } from 'react'

function UseStateD_5() {
    let [count, setCount] = useState(0);
    let InCount = ()=>{
        setCount(count+1)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-6 ">
                <h2 className='text-7xl font-bold '>React Counter</h2>
                <h1 className=' px-4 py-1 rounded bg-red-400 '>{count}</h1>
                <button onClick={InCount} className='py-2 px-6 bg-sky-400 font-semibold rounded'>Inc Count</button>
            </div>
        </>
    )
}

export default UseStateD_5