import React, { useState } from "react";

function UseStateD_3(){
    let [val1,setVal1] = useState([1,2,3,4,5,6,7,8,9,10])
    let [val2,setVal2] = useState([1,2,3,4,5,6,7,8,9,10])
    let [val3,setVal3] = useState([1,2,3,4,5,6,7,8,9,10])

    return (
        <div className="p-10">
            
            <h1 className="text-red-600 font-bold">Delete no from particular index</h1>

            {val1.map(item=><h1>{item}</h1>)}
          <button onClick={()=>setVal1(()=>val1.filter((item,index)=> index != 3))} className="my-2  p-2 bg-sky-400 rounded-full text-white font-semibold">click me</button>

          {/* for even no  */}
        <h1 className="text-red-600 font-bold">for even no</h1>
            {val2.map(item=><h1>{item}</h1>)}
          <button onClick={()=>setVal2(()=>val2.filter(item => item%2 !== 0))} className="my-6  p-2 bg-sky-400 rounded-full text-white font-semibold">click me</button>


        {/* for odd no  */}

        <h1 className="text-red-600 font-bold">for odd no</h1>

        {val3.map(item=><h1>{item}</h1>)}

        <button onClick={()=>setVal3(()=>val3.filter((item => item%2 == 0)))} className="my-6  p-2 bg-sky-400 rounded-full text-white font-semibold">click me</button>


        </div>
    );
}

export default UseStateD_3;