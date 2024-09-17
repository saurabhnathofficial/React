import React, { useRef, useState } from 'react'

function Pracice() {
  // form handling using hook or useState
  const [val, setVal] = useState({name:'', age:'', add:''})

    // const name = useRef(null);
    // const age = useRef(null);  
    // const add = useRef(null);

    const formHandle = (event) => {
        event.preventDefault();
        
        // const bioData = {
        //   name: name.current.value,
        //   age: age.current.value,
        //   add: add.current.value
        // }
        // console.log(bioData);

        console.log(val);
      
      }
      
  return (
    <form action="" className='flex flex-col gap-2' onSubmit={formHandle}>
        <input type="text" placeholder='Eneter name' className='px-2 py-1 rounded' onChange={(event=> setVal({...val, name: event.target.value }))}/>
        <input type="number" placeholder='Eneter age' className='px-2 py-1 rounded' onChange={(event)=> setVal({...val,age: event.target.value})}/>
        <input type="text" placeholder='Eneter address' className='px-2 py-1 rounded' onChange={(event)=>setVal({event: add.target.value})} />
        <input type="button" value="submit" className='px-2 py-1 bg-sky-400 rounded' />
    </form>
  )
}

export default Pracice