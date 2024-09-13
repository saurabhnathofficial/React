import React from 'react'
import { useForm } from 'react-hook-form'

function RctHookForm() {
    const  { register,handleSubmit } = useForm()
  return (
    <div>
        <form action="" onSubmit={handleSubmit(data =>console.log(data))} className='flex flex-col gap-3'>
            <input {...register('name')} type="text" placeholder='name' className='px-2 py-1 rounded' />
            <input {...register('age')} type="number" placeholder='age' className='px-2 py-1 rounded'/>
            <input type="submit" value="submit" className='px-2 py-1 rounded bg-sky-400' />
        </form>
    </div>
  )
}

export default RctHookForm