import ClockTitle from "./components/ClockTitle";
import ClockText from "./components/ClockText";
import ClockTime from "./components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(){
  return(    
    <div className="clock-container">
      <ClockTitle />
      <ClockText />
      <ClockTime />
    </div>
    
  );
}

export default App;