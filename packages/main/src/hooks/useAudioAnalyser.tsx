import type { FFTSize } from "../util";
import { RefObject, useEffect, useState } from "react";

/**
 * Hook to create and manage an AnalyserNode for a given audio element and context.
 * Ensures nodes are not created or connected after the context is closed.
 */
export function useAudioAnalyser(
  audioElement: HTMLAudioElement | null,
  audioContext: AudioContext | null,
  sourceNodeRef: RefObject<MediaElementAudioSourceNode | null>,
  fftSize: FFTSize,
) {
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  useEffect(() => {
    if (!audioElement || !audioContext || audioContext.state === "closed") {
      setAnalyser(null);
      return;
    }

    // Only create source node if not already created
    if (!sourceNodeRef.current) {
      sourceNodeRef.current =
        audioContext.createMediaElementSource(audioElement);
    }

    // Only create analyser if not already created
    const analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = fftSize;

    sourceNodeRef.current.connect(analyserNode);
    analyserNode.connect(audioContext.destination);

    setAnalyser(analyserNode);

    return () => {
      analyserNode.disconnect();
      try {
        sourceNodeRef.current?.disconnect();
      } catch (e) {
        console.warn("Error disconnecting source node:", e);
      }
      setAnalyser(null);
    };
    // Only rerun if audioElement, audioContext, or fftSize changes
  }, [audioElement, audioContext, fftSize, sourceNodeRef]);

  return analyser
    ? {
      analyser,
      getFrequencyData: () => {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);
        return dataArray;
      },
    }
    : null;
}
