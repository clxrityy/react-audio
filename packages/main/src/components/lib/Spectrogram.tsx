import { ComponentProps, RefObject, useEffect, useRef, useState } from "react";
import { BaseProps, FFTSze } from "../../util";
import { AudioSource } from "../ui";

// Display component for the spectrogram
export interface SpectroGramDisplayProps extends ComponentProps<"canvas"> {
  audioRef: RefObject<HTMLAudioElement>;
  fftSize?: FFTSze;
  width?: number | string;
  height?: number | string;
  minDecibels?: number;
  maxDecibels?: number;
  smoothingTimeConstant?: number;
  colorMap?: string[];
  onFrameUpdate?: (data: Uint8Array) => void;
  fillStyle?: string;
  loop?: boolean;
}

export function SpectroGramDisplay({
  audioRef,
  fftSize = 1024,
  width = "100%",
  height = "25%",
  minDecibels = -100,
  maxDecibels = -25,
  colorMap = ["#111", "#ff0000", "#ffff00", "#ffffff"],
  onFrameUpdate,
  fillStyle,
  loop = false,
  smoothingTimeConstant = 0.8,
  ...props
}: SpectroGramDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const startAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    if (!audioRef.current) return;

    if (!audioContextRef.current) {
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;

      analyser.fftSize = fftSize;
      analyser.minDecibels = minDecibels;
      analyser.maxDecibels = maxDecibels;
      analyser.smoothingTimeConstant = smoothingTimeConstant;

      const source = audioContext.createMediaElementSource(audioRef.current);

      source.connect(analyser);
      analyser.connect(audioContext.destination);
    }

    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    if (loop) {
      audioRef.current.loop = true;
    }
  };

  useEffect(() => {
    if (!canvasRef.current || !audioRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 400;

    const interpolateColor = (
      color1: string,
      color2: string,
      factor: number,
    ) => {
      const result = color1
        .slice(1)
        .match(/.{2}/g)!
        .map((hex, i) => {
          const color1Compponent = parseInt(hex, 16);
          const color2Component = parseInt(
            color2.slice(1).match(/.{2}/g)![i]!,
            16,
          );

          const interpolatedComponent = Math.round(
            color1Compponent + factor * (color2Component - color1Compponent),
          );

          return interpolatedComponent.toString(16).padStart(2, "0");
        });

      return `#${result.join("")}`;
    };

    const getColor = (value: number) => {
      const percent = value / 255;
      const scaledValue = percent * (colorMap.length - 1);
      const index = Math.floor(scaledValue);
      const factor = scaledValue - index;
      const color1 = colorMap[index];
      const color2 = colorMap[index + 1] || color1;

      return interpolateColor(color1 as string, color2 as string, factor);
    };

    const drawSpectrogram = () => {
      if (!canvas || !ctx || !analyserRef.current) return;

      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      analyserRef.current.getByteFrequencyData(dataArray);

      ctx.fillStyle = fillStyle || "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bufferLength; i++) {
        const value = dataArray[i];
        const height = ((value as number) / 255) * canvas.height;
        const offset = canvas.height - height;
        const barWidth = canvas.width / bufferLength;

        ctx.fillStyle = getColor(value as number);
        ctx.fillRect(i * barWidth, offset, barWidth, height);
      }

      requestAnimationFrame(drawSpectrogram);
      onFrameUpdate?.(dataArray);
    };

    if (isPlaying) {
      drawSpectrogram();
    }
  }, [colorMap, fillStyle, isPlaying, onFrameUpdate]);

  return (
    <canvas
      {...props}
      onClick={() => {
        startAudio();
        setClicked(true);
      }}
      ref={canvasRef}
      style={{
        width,
        height,
      }}
      className={`border border-zinc-800/65 dark:border-zinc-500/65 rounded-md cursor-pointer backdrop:invert-50 ${!clicked && "bg-zinc-700/50 animate-pulse hover:border-2 transition-all hover:bg-zinc-700/75 hover:animate-none"}`}
    />
  );
}

export interface SpectrogramProps extends ComponentProps<"div"> {
  src: BaseProps["src"];
  fftSize?: FFTSze;
  width?: number | string;
  height?: number | string;
  minDecibels?: number;
  maxDecibels?: number;
  colorMap?: string[];
  smoothingTimeConstant?: number;
  onFrameUpdate?: (data: Uint8Array) => void;
  loop?: BaseProps["loop"];
  fillStyle?: string;
}

export function Spectrogram({
  src,
  fftSize,
  width,
  height,
  minDecibels,
  maxDecibels,
  colorMap,
  smoothingTimeConstant,
  onFrameUpdate,
  loop,
  fillStyle,
  ...props
}: SpectrogramProps) {
  const audioRef = useRef<HTMLAudioElement>(
    typeof Audio !== "undefined" ? new Audio() : null,
  );

  return (
    <div {...props}>
      <audio ref={audioRef}>
        <AudioSource src={src} />
      </audio>
      {audioRef.current && (
        <SpectroGramDisplay
          audioRef={audioRef as RefObject<HTMLAudioElement>}
          fftSize={fftSize}
          width={width}
          height={height}
          minDecibels={minDecibels}
          maxDecibels={maxDecibels}
          colorMap={colorMap}
          smoothingTimeConstant={smoothingTimeConstant}
          onFrameUpdate={onFrameUpdate}
          fillStyle={fillStyle}
          loop={loop}
        />
      )}
    </div>
  );
}
