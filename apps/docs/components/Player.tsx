"use client";
import {
  Player as ReactAudioPlayer,
  type PlayerProps,
} from "@clxrity/react-audio";

export function Player(props: PlayerProps) {

  return <ReactAudioPlayer {...props} />;
}
