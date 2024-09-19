import Api from "./Components/ApiCalling/Api";
import Whether from "./Components/whether/Whether";

const App = () => {

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center text-2xl text-white font-semibold">
        <Whether  />
      </div>
    </>
  );
};

export default App;
