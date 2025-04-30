import { FFTSize } from '../lib/types'
import { RefObject } from 'react'

export function useAudioAnalyzer(
  audioElement: HTMLAudioElement,
  audioContext: AudioContext,
  sourceNodeRef: RefObject<MediaElementAudioSourceNode | null>,
  fftSize: FFTSize
) {
  if (!audioElement || !audioContext) {
    return null
  }

  // Ensure only one source node is created
  if (!sourceNodeRef.current) {
    sourceNodeRef.current =
      audioContext.createMediaElementSource(audioElement)
  }

  const analyser = audioContext.createAnalyser()
  analyser.fftSize = fftSize
  sourceNodeRef.current.connect(analyser)
  analyser.connect(audioContext.destination)

  return {
    analyser,
    getFrequencyData: () => {
      const bufferLength = analyser.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)
      analyser.getByteFrequencyData(dataArray)
      return dataArray
    },
  }
}
