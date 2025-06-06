import { ComponentProps, RefObject, useEffect, useRef, useState } from "react";
import { Colors, BaseProps, FFTSze } from "../../util";
import { useAudioAnalyser } from "../../hooks/useAudioAnalyser";
import { Canvas } from "../ui";
import { Player } from "./Player";

export interface WaveformProps extends ComponentProps<"div"> {
  src: BaseProps["src"];
  size?: number;
  color?: BaseProps["color"];
  autoplay?: BaseProps["autoplay"];
  loop?: BaseProps["loop"];
  showProgress?: BaseProps["showProgress"];
  showVolume?: BaseProps["showVolume"];
  fftSize?: FFTSze
  onLoad?: () => void;
  audioRef?: RefObject<HTMLAudioElement | null> | null;
}

export function Waveform({
  src,
  size = 420,
  color = Colors.primary,
  autoplay = false,
  loop = false,
  showProgress = false,
  showVolume = false,
  fftSize = 2048,
  onLoad,
  audioRef = null,
  ...props
}: WaveformProps) {

  if (!audioRef) audioRef = useRef<HTMLAudioElement>(null);

  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyserNode, setAnalyserNode] = useState<AnalyserNode | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = src;
    }
  }, [src]);

  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);

  const initializeAudio = () => {
    if (!audioRef.current) {
      console.warn('🚨 Audio ref is not ready yet.')
      return;
    }

    try {
      const ctx = audioContext ?? new AudioContext();
      if (!audioContext) {
        setAudioContext(ctx);
      }

      if (!ctx) {
        throw new Error("AudioContext is not initialized.");
      }

      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Ensure only one source node is created
      if (!sourceNodeRef.current) {
        sourceNodeRef.current = ctx.createMediaElementSource(
          audioRef.current
        );
      }

      const analyser = useAudioAnalyser(
        audioRef.current,
        ctx,
        sourceNodeRef,
        fftSize
      );

      if (analyser) {
        setAnalyserNode(analyser.analyser);
      }

    } catch (e) {
      console.error("❌ Failed to initalize AudioContext:", e);
    }
  }

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.load();
    }
  }, [src]);

  useEffect(() => {
    const enableAudio = () => {
      if (!audioContext) {
        initializeAudio();
      } else if (audioContext.state === "suspended") {
        audioContext.resume();
      }
    }

    window.addEventListener("click", enableAudio);

    return () => {
      window.removeEventListener("click", enableAudio);
      audioContext?.close();
    }

  }, [audioContext]);

  return (
    <div
      {...props}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        position: "relative",
        borderRadius: "8px",
        backgroundColor: "transparent",
        gap: "8px"
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: `100px`
        }}
      >
        {
          analyserNode && (
            <Canvas
              analyser={analyserNode}
              bufferLength={analyserNode.frequencyBinCount}
              dataArray={new Uint8Array(analyserNode.frequencyBinCount)}
              size={size}
              color={color}
              width={size}
              height={size}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.8,
                pointerEvents: "none",
                zIndex: 0,
              }}
            />
          )
        }
        <Player
          src={src}
          audioRef={audioRef}
          autoplay={autoplay}
          loop={loop}
          showProgress={showProgress}
          showVolume={showVolume}
          color={color}
          onLoad={onLoad}
          showNextPrevControls={false}
          size={size}
        />
      </div>
    </div>
  )
}
