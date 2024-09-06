import React, { useState } from "react";
import PropsEx2 from "./Components/PropsEx2";
import PropsEx from "./Components/PropsEx";
import ClickEv from "./Components/ClickEv";
import Form from "./Components/Form";
import UseStateD_5 from "./Components/UseStateD_5";
import LikeButton from "./Components/LikeButton";
const App = () => {

  const data = [
    { title: "Mustang GT", bgColor: "bg-blue-500", img: "https://images.unsplash.com/photo-1724838818103-a3ff16624686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzR8fHxlbnwwfHx8fHw%3D", button: "Buy Now", remove: false },
    { title: "Vinatge Villa", bgColor: "bg-green-500", img: "https://images.unsplash.com/photo-1724931282671-2d3bcd6de8f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzd8fHxlbnwwfHx8fHw%3D", button: "visit Now", remove: false },
    { title: "Bar-Cafe", bgColor: "bg-green-900", img: "https://images.unsplash.com/photo-1725298831691-16fad1929c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D", button: "Explore Now", remove: false },
    { title: "Street Away", bgColor: "bg-red-400", img: "https://images.unsplash.com/photo-1724271938828-8d10e09fc37a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", button: "Walk Now", remove: false },
  ];
  const [val, setVal] = useState(data);

  const dummy = () => alert("hello");

  return (
    <>
      {/* propsEx2 */}
      {/* <PropsEx2 color="bg-red-500" text="Know More" url="https://images.unsplash.com/photo-1724942462164-7c30f103d91c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjN8fHxlbnwwfHx8fHw%3D" />
      <PropsEx2 color="bg-sky-600" text="Download" url="https://images.unsplash.com/photo-1724805053604-4f189fb90dff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjl8fHxlbnwwfHx8fHw%3D" /> */}
      {/* <div className="p-4 h-screen w-full bg-green-100 flex items-center justify-center gap-4 flex-wrap">
        
         {val.map((items,index)=>(
          <PropsEx key={index} title={items.title} dummy={dummy} img={items.img} bgColor={items.bgColor} button={items.button}/>
         ))}
      </div> */}

      <div className="w-full h-screen bg-zinc-500 flex justify-center items-center">
        {/* <ClickEv /> */}
        {/* <Form /> */}
        {/* <UseStateD_5 /> */}
        <LikeButton />
      </div>
    </>


  );
};

export default App;
