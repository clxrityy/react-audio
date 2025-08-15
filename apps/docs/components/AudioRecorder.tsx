"use client";

import {
  AudioRecorder as ReactAudioRecorder,
  type AudioRecorderProps,
} from "@clxrity/react-audio";

export function AudioRecorder(props: AudioRecorderProps) {
  return <ReactAudioRecorder {...props} />;
}
