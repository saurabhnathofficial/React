import LudoBoard from "./Components/LudoBoard/LudoBoard";
import Todo from "./Components/Todo/Todo";

const App = () => {

  return (
    <>
    <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center text-3xl " id="main">
    <Todo />
    </div>
    </>
  );
};

export default App;
