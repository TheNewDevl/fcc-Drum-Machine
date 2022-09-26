import { SoundsList } from "./utils/soundsList";
import { SoundType } from "./utils/types";
import Sound from "./Components/Sound/Sound";

function App() {
  return (
    <div>
      {SoundsList.map((sd: SoundType) => (
        <Sound key={sd.id} sound={sd} />
      ))}
    </div>
  );
}

export default App;
