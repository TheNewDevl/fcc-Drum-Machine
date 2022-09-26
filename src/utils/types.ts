import { Dispatch, SetStateAction } from "react";

export type AudioStateType = {
  playing: HTMLAudioElement | null;
  id: SoundType["id"] | null;
};

export type SoundType = {
  id: string;
  url: string;
};

export enum OnOff {
  OFF = 0,
  ON = 1,
}

export type DrumMachineContextType = {
  isLoopSelected: boolean;
  setLoop: Dispatch<SetStateAction<boolean>>;
  onOff: OnOff;
  setOnOff: Dispatch<SetStateAction<OnOff>>;
};
