import React from 'react'

function ClickEv() {
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
        <button  className="px-6 py-2 bg-sky-500 rounded" onClick={() => alert('Button clicked!')}>Click me!</button>
        <p className='text-center text-white font-semibold w-80' onDoubleClick={()=>alert("Double Clicked!!!!")}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam laudantium sunt atque necessitatibus voluptatum asperiores harum officiis eveniet mollitia, illum vel quibusdam exercitationem, possimus commodi nemo! Quod veniam error magnam!</p>
    </div>
  )
}

export default ClickEv