import "./App.css";
import Accordion from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star rating";

function App() {
  return (
    <div className="App">
      {/* Accordian */}
      <Accordion />
      {/* Random Color */}
      <RandomColor />
      {/* Star Rating */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
