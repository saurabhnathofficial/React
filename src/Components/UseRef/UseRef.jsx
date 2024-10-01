import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

    // const [color,setColor] = useState('red')
    const btnRef = useRef();

    useEffect(()=>{
        console.log('firset Render will change the color')
        ref.current.style.backgroundColor = 'red'
    },[])

  return (
    <div>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore tenetur quae dignissimos nam mollitia itaque, pariatur dolores numquam aspernatur culpa tempora ut. Porro nisi incidunt quo soluta officiis tempore.</h2>
        <button ref={ref} className='px-6 py-2 bg-zinc-400 rounded mt-6'>Color</button>
    </div>
  )
}

export default UseRef