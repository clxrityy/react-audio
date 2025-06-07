"use client";
import {
  Player as ReactAudioPlayer,
  type PlayerProps,
} from "@clxrity/react-audio";
import { useRef } from "react";

export function Player(props: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(new Audio(props.src));

  return <ReactAudioPlayer audioRef={audioRef} {...props} />;
}
