import "./App.css";
import Accordion from "./components/accordian";
import RandomColor from "./components/random-color";

function App() {
  return (
    <div className="App">
      {/* Accordian */}
      <Accordion />
      {/* Random Color */}
      <RandomColor />
    </div>
  );
}

export default App;
