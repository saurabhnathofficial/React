import React, { useState } from "react";


function UseState() {
    // basics
    // useState()
    // use state will return two members first is index and second is function
    // function is used to update the value
    //  useState is like an Array
    
    // const arr = useState(43);
    // console.log(arr);
    
    // basic usestate
    
    const [score,setScore] = useState(100);

    const [band, setBand] = useState(false);

    const [val, setVal] = useState(10);

    const [run, setRun] = useState(4);

    // Advance useState

    const [sell,setSell] = useState({name: " saurabh", isBanned: false});
    
    
    
        return (
            <div className="p-10 font-bold flex flex-col">
                    <h2>basic Use state</h2>
                
                    {score}
                    <button onClick={()=>{setScore(score+100)}} className="my-2 w-20 p-2 bg-sky-400 rounded">Change</button>
                    {band.toString()}
                    <button onClick={()=>{setBand(!band)}} className="my-2 w-20 p-2 bg-sky-400 rounded">Change</button>
                    {val}
                    <button onClick={()=>setVal(p=>p+1)} className="my-2 w-20 p-2 bg-sky-400 rounded">Change</button>
                    {run}
                    <button onClick={()=>setRun(run=>run+4)} className="my-2 w-20 p-2 bg-sky-400 rounded">Change</button>

                    <h1>Name : {sell.name}</h1>
                    <h1>banned: {sell.isBanned.toString()}</h1>

                    <button onClick={()=>setSell({...sell,isBanned: !sell.isBanned })} className="my-2 w-20 p-2 bg-sky-400 rounded">Change</button>

            </div>
        );
}


export default UseState;