import "./App.scss";
import SoundsContainer from "./Components/SoundsContainer/SoundsContainer";
import ControlsContainer from "./Components/ControlsContainer/ControlsContainer";

function App() {
  return (
    <div id="drum-machine">
      <SoundsContainer />
      <ControlsContainer />
    </div>
  );
}

export default App;
