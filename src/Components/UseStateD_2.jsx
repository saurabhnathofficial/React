import React, { useState } from "react";

function UseStateD_2(){
    // useState master
    const [val,setVal] = useState({name: "saurabh",age: true});

    const [a,b] = useState({name: "Harsh" , married: true})

    // useState Arrays
    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [arr1, setArr1] = useState([2,4,6,8,10,12,14]);

    return (
      <div className="px-10 py-2">
        {/* <h1>Hello!!!</h1>
        <h2>{val.name}</h2>
        <h1>can vote??</h1>
        <h2 className={`uppercase text-xxl font-bold ${!val.age? "text-red-600" : "text-blue-600"}`}>{val.age.toString()}</h2>
        <button onClick={()=>setVal({...val, age: !val.age})} className={`px-6 mt-4 py-2 ${!val.age? "bg-red-600" : "bg-blue-600"} text-white rounded-full`}>click</button>

        <h2 className={`${a.married ? "text-blue-600" : "text-red-600"} mt-10 font-bold`}>Hello ji</h2>
        <h2 className="font-semibold uppercase text-sm">{a.married.toString()}</h2>
        <button onClick={()=>b({...a, married: !a.married})} className="px-6 py-2 bg-green-400 font-bold rounded-full mt-4">click</button> */}

        {/* useState Array */}

        {arr.map(item=><h1>{item}</h1>)}

        <button onClick={()=>setArr(()=>arr.filter((item,index)=> index != arr.length - 1))} className={` px-6 mt-4 py-2 bg-sky-500 text-white rounded-full`}>click</button>
         


        {arr1.map(item=><h1>{item}</h1>)}

        <button onClick={()=>setArr1(()=>arr1.filter((item,index)=>index != 3))} className="mt-4 px-6 py-3 bg-red-700 rounded-full text-white">click</button>
        
      </div>
    );
}

export default UseStateD_2;