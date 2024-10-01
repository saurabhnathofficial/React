import React, { useCallback, useState, useEffect, useRef } from 'react'

function Pass() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');
    
    // Use ref to access the input field
    const inputRef = useRef(null);

    const passwordgenerator = useCallback(() => {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (numberAllowed) characters += '0123456789';
        if (charAllowed) characters += '!@#$%^&*()_+{}[]:";\'<>?,./';

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * characters.length);
            generatedPassword += characters.charAt(index);
        }
        setPassword(generatedPassword);
    }, [length, numberAllowed, charAllowed]);

    useEffect(() => {
        passwordgenerator();
    }, [length, numberAllowed, charAllowed, passwordgenerator]);

    // Function to handle copy and highlight
    const handleCopy = () => {
        if (inputRef.current) {
            // Copy password to clipboard
            navigator.clipboard.writeText(password);

            // Select the password in the input field
            inputRef.current.select();
        }
    };

    return (
        <div className='flex flex-col items-center justify-center gap-6 text-yellow-500'>
            <h1 className='text-white text-4xl font-bold'>Password Generator</h1>
            <div className='w-full flex shadow rounded-lg overflow-hidden'>
                <input
                    type="text"
                    placeholder='Password...'
                    className='placeholder-gray-500 px-3 py-1 rounded-l-lg w-full outline-none'
                    readOnly
                    value={password}
                    ref={inputRef} // Set ref to input
                />
                <button
                    className='text-white bg-sky-600 text-xl px-3'
                    onClick={handleCopy} // Call handleCopy on click
                >Copy</button>
            </div>
            <div className="flex text-sm gap-x-4">
                <input
                    type="range"
                    min={6}
                    max={20}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e) => setLength(parseInt(e.target.value))}
                />
                <label htmlFor="length">Length: {length}</label>

                <input
                    type="checkbox"
                    checked={numberAllowed}
                    onChange={() => setNumberAllowed(prev => !prev)}
                />
                <label htmlFor='number'>Number</label>

                <input
                    type="checkbox"
                    checked={charAllowed}
                    onChange={() => setCharAllowed(prev => !prev)}
                />
                <label htmlFor='character'>Character</label>
            </div>
        </div>
    );
}

export default Pass;
