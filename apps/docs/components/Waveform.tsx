"use client";
import {
  Waveform as ReactAudioWaveform,
  type WaveformProps,
} from "@clxrity/react-audio";

export function Waveform(props: WaveformProps) {
  return <ReactAudioWaveform {...props} />;
}
