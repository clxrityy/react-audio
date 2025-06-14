"use client";

import { Spectrogram as ReactAudioSpectrogram, SpectrogramProps } from "@clxrity/react-audio";

export function Spectrogram(props: SpectrogramProps) {
  return <ReactAudioSpectrogram {...props} />;
}
