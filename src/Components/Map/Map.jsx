import React from "react";

function Map(){

    const data = 12;
    const data2 = 30;
  
    const arr = ["saurabh", "sumit", "deepanshi"];
    const arr2 = ["saurabh", "sumit", "deepanshi", "Jyoti", "buggu"];
    let arr3 = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7];
    let float = [1.2, 3.2, 21.4, 6.2, 5.4, 6.6, 7];
    
    return (
        <div>
             {arr2.map((value, index) => (
        <div key={index} className="w-28 m-3 text-center px-5 py-5 bg-zinc-500 rounded">
          {value}
        </div>
      ))}

      {arr3.map((value, index) => (
        <div key={index} className="w-14 m-3 text-center rounded-xl p-5 bg-zinc-500">
          {value}
        </div>
      ))}

      {float.map((value, index) => (
        <div key={index} className="w-14 m-3 p-3 text-center bg-zinc-300 rounded">
          {value}
        </div>
      ))}
        </div>
    );
}

export default Map;