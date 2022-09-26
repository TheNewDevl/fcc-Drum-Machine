export const createAudio = (src: string, loop?: boolean) => {
  const audio = new Audio(src);
  audio.loop = !!loop;
  audio.play();
  return audio;
};

export const stopAudio = (audio: HTMLAudioElement) => {
  audio.loop = false;
  audio.pause();
  audio.currentTime = 0;
};
