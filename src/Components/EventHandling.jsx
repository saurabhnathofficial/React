import React from "react";

function EventHandling() {

    const card = [
        {name: "channa ve", dsc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {name: "Aai nhi", dsc: "Lorem ipsum dolor sit amet consectetur adipisicin."}
    ];

    function click(){
        alert("hello ye click huae")
    };
    return (
        <div className="w-full h-screen bg-zinc-400 flex justify-center items-center flex-col gap-10">
        {card.map((value, index)=>(
             <div className="w-80  bg-red-100 rounded flex flex-col  justify-center capitalize gap-2 p-6">
             <h2 className="font-bold">{value.name}</h2>
             <p>{value.dsc}</p>
             <button onClick={click} className="bg-blue-300 rounded font-semibold p-1">Play</button>
         </div>
        ))}
        </div>
    );
}
;
export default EventHandling;