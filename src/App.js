import "./App.css";
import Board from "./Square";

const App = () => {
  return (
    <div className="App">
      <h1>Next Player: </h1>
      <Board></Board>
    </div>
  );
};

export default App;
