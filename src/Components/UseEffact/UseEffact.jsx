import { useState,useEffect } from "react"

export default function UseEffact(){

    const [Count,setcout] = useState(0)

    const [anotherCount, setAnotherCount] = useState(0);

    function inCoutn(){
        setcout (Count + 1);
    }

    function inAnotherCoutn(){
        setAnotherCount (anotherCount + 1);
    }

    // it will run whenever any state is render 

//   useEffect(function hello(){
//     console.log("hello world!!");
//   })
  
//   it will run whene another counter is render 

useEffect(function namsakar(){
    console.log("Namskar!!");
},[anotherCount])


    return(
        <div>
            <h1>Effact Hook</h1>
            <h2>Count = {Count}</h2>
            <button onClick={inCoutn} className="px-10 py-1 rounded bg-sky-300">+1</button>
            <h2>anotherCount = {anotherCount}</h2>
            <button onClick={inAnotherCoutn} className="px-10 py-1 rounded bg-sky-300">+1</button>
        </div>
    )
}