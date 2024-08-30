import React from 'react'

function PropsEx({value}) {

    const {name, image, profession} = value;
    
    return (

        <div className='w-72 h-96 bg-zinc-900 rounded overflow-hidden'>
            <div className="h-64 w-full">
                <img className='rounded w-full h-full object-fit object-center object-cover' src={image} alt="" />
            </div>
            <h1 className='uppercase font-bold text-xl text-white mt-4 ml-6'>{name}</h1>
            <h1 className=' font-bold text-sm text-white ml-6'>{profession}</h1>
            <button className='px-4 py-2 bg-blue-700 rounded text-sm text-white font-semibold mt-2 ml-6'>Add friend</button>
        </div>

    )
}

export default PropsEx;