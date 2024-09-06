import React from 'react'

function PropsEx2({color,text,url}) {
  return (
    <div className={`m-4`}>
        <button className={`py-2 px-6 ${color} rounded text-white uppercase font-semibold`}> {text}</button>
        <img className='mt-4 h-60 w-40 object-cover position-center rounded' src={url} alt="" />
    </div>
  )
}

export default PropsEx2