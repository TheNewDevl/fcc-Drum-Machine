import { SoundsList } from "./utils/soundsList";
import { SoundType } from "./utils/types";
import Sound from "./Components/Sound/Sound";
import "./App.scss";

function App() {
  return (
    <div id="drum-machine">
      <div className="sounds-container">
        {SoundsList.map((sd: SoundType) => (
          <Sound key={sd.id} sound={sd} />
        ))}
      </div>
    </div>
  );
}

export default App;
