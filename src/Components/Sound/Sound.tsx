import React, { useContext, useState } from "react";
import { AudioStateType, SoundType } from "../../utils/types";
import { createAudio, stopAudio } from "../../utils/soundFuncs";
import { DrumMachineContext } from "../../utils/context/DrumMachineContext";

type SoundProps = {
  sound: SoundType;
};

const Sound = ({ sound }: SoundProps) => {
  const defaultSoundState: AudioStateType = {
    playing: null,
    id: null,
  };
  const [soundState, setSoundState] =
    useState<AudioStateType>(defaultSoundState);

  const { isLoopSelected } = useContext(DrumMachineContext);

  const handleSounds = (e: React.MouseEvent, sound: SoundType) => {
    e.preventDefault();

    if (!soundState.playing) {
      const newAudio: HTMLAudioElement = createAudio(sound.url, isLoopSelected);
      isLoopSelected && setSoundState({ playing: newAudio, id: sound.id });
    } else if (soundState.playing) {
      stopAudio(soundState.playing);
      setSoundState(defaultSoundState);
    }
  };

  return (
    <button
      onClick={(e: React.MouseEvent) => {
        handleSounds(e, sound);
      }}
    >
      {sound.id}
    </button>
  );
};

export default Sound;
/** Created by carlos on 23/09/2022 */
