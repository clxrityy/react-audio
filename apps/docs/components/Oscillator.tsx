"use client";

import {
  Oscillator as ReactAudioOscillator,
  type OscillatorProps,
} from "@clxrity/react-audio";
import { useState } from "react";

export function Oscillator(props: OscillatorProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <ReactAudioOscillator
      {...props}
      isPlaying={isPlaying}
      onPlayChange={setIsPlaying}
    />
  );
}
