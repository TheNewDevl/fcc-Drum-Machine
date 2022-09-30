import React, { useContext, useEffect, useRef, useState } from "react";
import { AudioStateType, SoundType } from "../../utils/types";
import { PlayAudio, stopAudio } from "../../utils/soundFuncs";
import { DrumMachineContext } from "../../utils/context/DrumMachineContext";
import "./Sound.scss";

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
  const { isLoopSelected, onOff, setSoundId } = useContext(DrumMachineContext);

  //Contain Audio HTML Element
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSounds = (e?: React.MouseEvent | null) => {
    e && e.preventDefault();
    setSoundId(sound.id);

    if (!soundState.playing) {
      setSoundState({ playing: audioRef.current, id: sound.id });
      PlayAudio(audioRef.current!, isLoopSelected);
      audioRef.current!.addEventListener("ended", () => {
        setSoundState(defaultSoundState);
      });
    } else if (soundState.playing) {
      stopAudio(soundState.playing);
      setSoundState(defaultSoundState);
      setSoundId("");
    }
  };
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === sound.keyName.toLowerCase()) {
        btnRef.current!.click();
      }
    };
    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [soundState]);

  useEffect(() => {
    if (!onOff && soundState.playing) {
      handleSounds();
    }
  }, [onOff]);

  const handleClassName = () => {
    return soundState.playing ? "drum-pad playing" : "drum-pad";
  };

  return (
    <div className="btn-container">
      <button
        ref={btnRef}
        className={handleClassName()}
        id={sound.id}
        onClick={handleSounds}
        disabled={!onOff}
        onKeyDown={() => handleSounds()}
      >
        <audio
          ref={audioRef}
          className="clip"
          id={sound.keyName}
          src={sound.url}
        ></audio>
        {sound.keyName}
      </button>
    </div>
  );
};

export default Sound;
/** Created by carlos on 23/09/2022 */
