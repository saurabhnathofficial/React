import Api from "./Components/ApiCalling/Api";

const App = () => {

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center text-xl " id="main">
        <Api  />
      </div>
    </>
  );
};

export default App;
