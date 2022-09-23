import React, { useState } from "react";
import { SoundsList } from "./utils/soundsList";
import { createAudio, stopAudio } from "./utils/soundFuncs";
import { AudioStateType, SoundType } from "./utils/types";

function App() {
  const [soundsHistoryState, setSoundsHistoryStates] = useState<
    AudioStateType[]
  >([]);

  const handleSound = (e: React.MouseEvent, sound: SoundType) => {
    e.preventDefault();
    let isPlaying: boolean = false;
    let existingAudio: AudioStateType | null = null;
    soundsHistoryState.forEach((p: AudioStateType) => {
      if (p.id === sound.id) {
        isPlaying = true;
        existingAudio = p;
      }
    });

    if (isPlaying && existingAudio) {
      stopAudio(existingAudio["audio"]);
      setSoundsHistoryStates((pv: AudioStateType[]) =>
        pv.filter((p: AudioStateType) => p.id !== sound.id)
      );
    } else {
      const newAudio: HTMLAudioElement = createAudio(sound.url, true);
      setSoundsHistoryStates((pv: AudioStateType[]) => {
        return [...pv, { audio: newAudio, id: sound.id }];
      });
    }
  };
  return (
    <div>
      {SoundsList.map((sd: SoundType) => (
        <button
          key={sd.id}
          onClick={(e: React.MouseEvent) => {
            handleSound(e, sd);
          }}
        >
          {sd.id}
        </button>
      ))}
    </div>
  );
}

export default App;
