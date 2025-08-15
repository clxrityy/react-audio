"use client";
import {
  ShufflePlayer as ReactAudioShufflePlayer,
  type ShufflePlayerProps,
} from "@clxrity/react-audio";

export function ShufflePlayer(props: ShufflePlayerProps) {
  return <ReactAudioShufflePlayer {...props} />;
}
