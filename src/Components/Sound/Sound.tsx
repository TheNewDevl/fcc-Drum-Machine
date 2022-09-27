import React, { useContext, useEffect, useRef, useState } from "react";
import { AudioStateType, SoundType } from "../../utils/types";
import { PlayAudio, stopAudio } from "../../utils/soundFuncs";
import { DrumMachineContext } from "../../utils/context/DrumMachineContext";

type SoundProps = {
  sound: SoundType;
};

const defaultSoundState: AudioStateType = {
  playing: null,
  id: null,
};

const Sound = ({ sound }: SoundProps) => {
  const [soundState, setSoundState] =
    useState<AudioStateType>(defaultSoundState);

  //Retrieve the loop state from context
  const { isLoopSelected } = useContext(DrumMachineContext);

  //Contain Audio HTML Element
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSounds = (e: React.MouseEvent | null) => {
    e && e.preventDefault();

    if (!soundState.playing) {
      setSoundState({ playing: audioRef.current, id: sound.id });
      PlayAudio(audioRef.current!, isLoopSelected);

      audioRef.current!.addEventListener("ended", () => {
        setSoundState(defaultSoundState);
      });
    } else if (soundState.playing) {
      stopAudio(soundState.playing);
      setSoundState(defaultSoundState);
    }
  };
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === sound.keyName.toLowerCase()) {
        btnRef.current!.click() /* handleSounds(null)*/;
      }
    };
    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [soundState]);

  const handleClassName = () => {
    return soundState.playing ? "drum-pad playing" : "drum-pad";
  };

  return (
    <button
      ref={btnRef}
      className={handleClassName()}
      id={sound.id}
      onClick={handleSounds}
    >
      <audio
        ref={audioRef}
        className="clip"
        id={sound.keyName}
        src={sound.url}
      ></audio>
      {sound.keyName}
    </button>
  );
};

export default Sound;
/** Created by carlos on 23/09/2022 */
