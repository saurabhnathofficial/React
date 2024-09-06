import React from 'react'

function PropsEx({ bgColor, title, button, img, dummy }) {

   
    return (

        // <div className='w-72 h-96 bg-zinc-900 rounded overflow-hidden'>
        //     <div className="h-64 w-full">
        //         <img className='rounded w-full h-full object-fit object-center object-cover' src={image} alt="" />
        //     </div>
        //     <h1 className='uppercase font-bold text-xl text-white mt-4 ml-6'>{name}</h1>
        //     <h1 className=' font-bold text-sm text-white ml-6'>{profession}</h1>
        //     <button className='px-4 py-2 bg-blue-700 rounded text-sm text-white font-semibold mt-2 ml-6'>Add friend</button>
        // </div>


        <>
                
                    <div className={`h-80 w-60 ${bgColor} bg-blue-400 rounded p-3`}>
                        <img className='h-1/2 w-full rounded object-cover' src={img} alt="" />
                        <h2 className='text-white font-bold uppercase text-xl mt-2'>{title}</h2>
                        <p className='text-sm text-white mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <button onClick={dummy} className='px-12 rounded mt-4 text-white text-sm font-semibold py-2 bg-sky-400'>{button}</button>
                    </div>
                
        </>

    );
}

export default PropsEx;