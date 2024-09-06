import React from 'react'

function Form() {
    function handleSubmit(event){
        console.log('Form submitted')
        event.preventDefault();
    }
  return (
   
        <form>
            <input type="text" placeholder='name' className='py-2 px-2 rounded mr-2' />
            <button onClick={handleSubmit} className='px-6 py-2 bg-sky-300'>Submit</button>
        </form>

  )
}

export default Form