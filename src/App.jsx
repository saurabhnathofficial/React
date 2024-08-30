import React from "react";
import UseState from "./Components/UseState";
import UseStateD_2 from "./Components/UseStateD_2";
import UseStateD_3 from "./Components/UseStateD_3";
import UseState_D4 from "./Components/UseState_D4";
import PropsEx from "./Components/PropsEx";

const App = () => {

  const data = [
    { name: "Sarita", profession: "Mackup", image: "https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Nikita", profession: "Model", image: "https://plus.unsplash.com/premium_photo-1674069719655-7289402d71e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" },
    { name: "Suman", profession: "Artist", image: "https://images.unsplash.com/photo-1572671846602-1e3a1f4c177f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" },
    { name: "Champa", profession: "Traveler", image: "https://plus.unsplash.com/premium_photo-1664356381529-9431be1ab66a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" }
  ];
  return (
    <>
      <div className='w-full h-screen bg-zinc-800 flex justify-center items-center gap-3'>
        {data.map((item, index) => (
          <PropsEx value={item} />

        ))}
      </div>
    </>
  );
};

export default App;
