import { ComponentProps, useEffect, useRef, useState } from "react";
import { Button } from "../ui";
import { Icons } from "../../util";

export interface OscillatorProps extends ComponentProps<"div"> {
  type?: OscillatorType;
  frequency?: number;
  gain?: number;
  isPlaying?: boolean;
  onPlayChange?: (playing: boolean) => void;
  showControls?: boolean;
  onFrequencyChange?: (frequency: number) => void;
  onGainChange?: (gain: number) => void;
}

export function Oscillator({
  type = "sine",
  frequency = 440,
  gain = 0.5,
  isPlaying = false,
  onPlayChange,
  showControls = true,
  onFrequencyChange,
  onGainChange,
  ...props
}: OscillatorProps) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const [localFrequency, setLocalFrequency] = useState<number>(frequency);
  const [localGain, setLocalGain] = useState<number>(gain);
  const [internalPlaying, setInternalPlaying] = useState<boolean>(!!isPlaying);

  // Deterministic playing state: controlled when prop provided, else internal
  const playing = typeof isPlaying === "boolean" ? isPlaying : internalPlaying;

  const ensureContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    return audioContextRef.current;
  };

  const stopNodes = () => {
    try {
      oscillatorRef.current?.stop();
    } catch {
      // ignore if already stopped
    }
    oscillatorRef.current?.disconnect();
    gainNodeRef.current?.disconnect();
    oscillatorRef.current = null;
    gainNodeRef.current = null;
  };

  useEffect(() => {
    if (playing) {
      const audioContext = ensureContext();
      if (!oscillatorRef.current) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(
          localFrequency,
          audioContext.currentTime,
        );
        gainNode.gain.setValueAtTime(localGain, audioContext.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillatorRef.current = oscillator;
        gainNodeRef.current = gainNode;
      } else {
        // update existing node params when playing
        const ctx = audioContextRef.current!;
        oscillatorRef.current.frequency.setValueAtTime(
          localFrequency,
          ctx.currentTime,
        );
        gainNodeRef.current!.gain.setValueAtTime(localGain, ctx.currentTime);
      }
    } else {
      // stop nodes but keep context; close on unmount
      stopNodes();
    }

    return () => {
      // no-op here; full cleanup in unmount effect
    };
  }, [playing, type, localFrequency, localGain]);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (
        audioContextRef.current &&
        audioContextRef.current.state === "suspended"
      ) {
        void audioContextRef.current.resume();
      }
    };

    window.addEventListener("pointerdown", handleUserInteraction, { once: true });
    return () => {
      window.removeEventListener("pointerdown", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    // unmount cleanup: stop nodes and close context if still open
    return () => {
      stopNodes();
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        // Ignore errors if context already closed by the environment
        audioContextRef.current.close().catch(() => undefined);
      }
      audioContextRef.current = null;
    };
  }, []);

  return (
    <div
      {...props}
      className={`flex flex-col gap-2 items-center ${props.className}`}
    >
      {showControls && (
        <div className="flex items-center gap-2">
          <Button
            title={playing ? "Pause" : "Play"}
            aria-label={playing ? "Pause oscillator" : "Play oscillator"}
            onClick={() => {
              if (typeof isPlaying === "boolean" && onPlayChange) {
                onPlayChange(!isPlaying);
              } else {
                setInternalPlaying((p) => !p);
              }
            }}
          >
            {playing ? <Icons.Pause /> : <Icons.Play />}
          </Button>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <span>
            Frequency: <span className="font-mono">{localFrequency} Hz</span>
          </span>
          <input
            className="disabled:opacity-50 disabled:cursor-not-allowed"
            type="range"
            min={20}
            max={2000}
            value={localFrequency}
            onChange={(e) => {
              const newFreq = parseFloat(e.target.value);
              setLocalFrequency(newFreq);
              onFrequencyChange?.(newFreq);

              if (oscillatorRef.current) {
                oscillatorRef.current.frequency.setValueAtTime(
                  newFreq,
                  audioContextRef.current?.currentTime ?? 0,
                );
              }
            }}
          />
        </label>
        <label className="flex items-center gap-2">
          <span>
            Gain: <span className="font-mono">{localGain}</span>
          </span>
          <input
            type="range"
            className="disabled:opacity-50 disabled:cursor-not-allowed"
            min={0}
            max={1}
            step={0.01}
            value={localGain}
            onChange={(e) => {
              const newGain = parseFloat(e.target.value);
              setLocalGain(newGain);
              onGainChange?.(newGain);
              if (gainNodeRef.current) {
                gainNodeRef.current.gain.setValueAtTime(
                  newGain,
                  audioContextRef.current?.currentTime ?? 0,
                );
              }
            }}
          />
        </label>
      </div>
    </div>
  );
}
