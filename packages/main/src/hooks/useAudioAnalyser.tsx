import type { FFTSze } from "../util";
import { RefObject } from "react";

export function useAudioAnalyser(
  audioElement: HTMLAudioElement,
  audioContext: AudioContext,
  sourceNodeRef: RefObject<MediaElementAudioSourceNode | null>,
  fftSize: FFTSze,
) {
  if (!audioElement || !audioContext) {
    return null;
  }

  if (!sourceNodeRef.current) {
    sourceNodeRef.current = audioContext.createMediaElementSource(audioElement);
  }

  const analyser = audioContext.createAnalyser();
  analyser.fftSize = fftSize;
  sourceNodeRef.current.connect(analyser);
  analyser.connect(audioContext.destination);

  return {
    analyser,
    getFrequencyData: () => {
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(dataArray);
      return dataArray;
    },
  };
}
