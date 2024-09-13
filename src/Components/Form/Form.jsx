import React, { useRef } from 'react'

function Form() {

    const name = useRef(null);
    const age = useRef(null);
    const email = useRef(null);
    const address = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(name.current.value)
        // console.log(age.current.value)
        // console.log(email.current.value)
        // console.log(address.current.value)
        const data = {
            name: name.current.value,
            age: age.current.value,
            email: email.current.value,
            address: address.current.value
        }
        console.log(data)
    }

    return (

        <form action="" className='flex flex-col gap-3' onSubmit={handleSubmit}  >
            <input type="text" placeholder="Enter your name" className='px-2 py-1 text-xl rounded' ref={name} />
            <input type="number" placeholder="Enter your age" className='px-2 py-1 text-xl rounded' ref={age} />
            <input type="email" placeholder="Enter your email" className='px-2 py-1 text-xl rounded' ref={email} />
            <input type="text" placeholder="Enter your address" className='px-2 py-1 text-xl rounded' ref={address} />
            <input type="submit" value="submit" className='px-4 py-2 bg-sky-400 rounded uppercase text-sm font-semibold' />
        </form>
    )
}

export default Form