import { Dispatch, SetStateAction } from "react";

export type AudioStateType = {
  playing: HTMLAudioElement | null;
  id: SoundType["id"] | null;
};

export type SoundType = {
  id: string;
  url: string;
  keyName: string;
};

export type DrumMachineContextType = {
  isLoopSelected: boolean;
  setLoop: Dispatch<SetStateAction<boolean>>;
  onOff: boolean;
  setOnOff: Dispatch<SetStateAction<boolean>>;
  soundId: SoundType["id"];
  setSoundId: Dispatch<SetStateAction<SoundType["id"]>>;
};
