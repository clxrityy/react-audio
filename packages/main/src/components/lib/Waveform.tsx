import { ComponentProps, useEffect, useMemo, useRef, useState } from "react";
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
  fftSize?: FFTSze;
  onLoad?: () => void;
}

/**
 * Waveform component renders an audio player and a real-time waveform visualization.
 * - Supports playback controls (play, pause, next, previous)
 * - Displays current playback time and duration
 * - Allows volume control
 */
export function Waveform({
  src,
  size = 420,
  color = Colors.primary,
  autoplay = false,
  loop = false,
  showProgress = true,
  showVolume = true,
  fftSize = 2048,
  onLoad,
  ...props
}: WaveformProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioReady, setAudioReady] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);

  // Wait for the audio element to mount (next animation frame)
  useEffect(() => {
    const id = requestAnimationFrame(() => setAudioReady(!!audioRef.current));
    return () => cancelAnimationFrame(id);
  }, []);

  // Create AudioContext only when audio is ready
  useEffect(() => {
    if (!audioReady) return;
    if (!audioContext || audioContext.state === "closed") {
      const ctx = new AudioContext();
      setAudioContext(ctx);
    }
  }, [audioReady, audioContext]);

  // Create analyser node using custom hook (only when everything is ready)
  const analyser = useAudioAnalyser(
    audioReady ? audioRef.current : null,
    audioContext,
    sourceNodeRef,
    fftSize,
  );

  const bufferLength = analyser?.analyser.frequencyBinCount;
  const dataArray = useMemo(
    () => (bufferLength ? new Uint8Array(bufferLength) : null),
    [bufferLength],
  );

  // Clean up AudioContext on unmount
  useEffect(() => {
    return () => {
      if (audioContext && audioContext.state !== "closed") {
        audioContext.close();
      }
      sourceNodeRef.current?.disconnect();
    };
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
        gap: "8px",
        minHeight: "200px",
        ...props.style,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: `100px`,
        }}
      >
        {analyser?.analyser && dataArray && bufferLength && (
          <Canvas
            analyser={analyser.analyser}
            bufferLength={bufferLength}
            dataArray={dataArray}
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
        )}
        <Player
          src={src}
          autoplay={autoplay}
          loop={loop}
          showProgress={showProgress}
          showVolume={showVolume}
          color={color}
          onLoad={onLoad}
          showNextPrevControls={false}
          size={size}
          ref={audioRef}
        />
      </div>
    </div>
  );
}
