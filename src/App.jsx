import "./App.scss";
import Card from "./components/Card";
import Top from "./assets/bg-pattern-top.svg";
import Bottom from "./assets/bg-pattern-bottom.svg";

function App() {
  return (
    <>
      <div className="top">
        <img className="top-bubble" src={Top} alt="" />
      </div>
      <Card />
      <div className="bottom-bubble">
        <img className="bottom-bubble" src={Bottom} alt="" />
      </div>
    </>
  );
}

export default App;
