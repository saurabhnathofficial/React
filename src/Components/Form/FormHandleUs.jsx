import React, { useState } from 'react'

function FormHandleUs() {
    const [val, setVal] = useState({ name: "", email: "" })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(val);
    }
    return (
        <div>
            <form action='' className='flex flex-col gap-2' onSubmit={handleSubmit}>
                <input type="text" onChange={(event) => setVal({...val, name: event.target.value })} placeholder="Enter your name" className='px-2 py-1 text-xl rounded' />
                <input type="email" onChange={(event) => setVal({ ...val, email: event.target.value })} placeholder="Enter your email" className='px-2 py-1 text-xl rounded' />
                <input type="submit" className='bg-green-300 rounded py-1' />
            </form>
        </div>
    );
}

export default FormHandleUs