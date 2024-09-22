import React from "react";
import Nav from "./Components/Route/Nav";


const App = () => {

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center gap-2 text-2xl text-white font-semibold">

        <Nav />
        <Routing />
        
      </div>
    </>
  );
};

export default App;
 