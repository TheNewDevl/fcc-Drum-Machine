export type AudioStateType = {
  audio: HTMLAudioElement;
  id: SoundType["id"];
};

export type SoundType = {
  id: string;
  url: string;
};
