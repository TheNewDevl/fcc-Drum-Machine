export const stopAudio = (audio: HTMLAudioElement) => {
  audio.loop = false;
  audio.pause();
  audio.currentTime = 0;
};

export const PlayAudio = (audio: HTMLAudioElement, loop?: boolean) => {
  audio.loop = !!loop;
  audio.play();
  return audio;
};
