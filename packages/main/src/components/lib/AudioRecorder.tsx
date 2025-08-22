import { useEffect, useRef, useCallback } from "react";
import { Button } from "../ui";
import { Colors, Icons } from "../../util";
import { Player } from "./Player";
import { useAudioRecorder } from "../../hooks/useAudioRecorder";

export interface AudioRecorderProps {
  className?: string;
  waveColor?: string;
  width?: number;
  height?: number;
  /** Called with the Blob whenever a fresh recording is finalized */
  onRecordingComplete?: (blob: Blob) => void;
}

/**
 * AudioRecorder component
 * - Start / stop microphone recording
 * - Preview playback of the recorded clip
 * - Simple realtime waveform while recording (time domain)
 * - Download button to save the recorded audio (webm)
 */
export function AudioRecorder({
  className,
  waveColor = Colors.primary,
  width = 400,
  height = 80,
  onRecordingComplete,
}: AudioRecorderProps) {
  const {
    recording,
    audioUrl,
    startRecording,
    stopRecording,
    getWaveformData,
  } = useAudioRecorder();
  const animationRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const blobRef = useRef<Blob | null>(null);

  // Derive blob from audioUrl when it changes (not stored in hook currently)
  useEffect(() => {
    if (!audioUrl) return;
    // Fetch the blob from the object URL to hand back to user (optional)
    fetch(audioUrl)
      .then((r) => r.blob())
      .then((b) => {
        blobRef.current = b;
        onRecordingComplete?.(b);
      })
      .catch(() => { });
  }, [audioUrl, onRecordingComplete]);

  const draw = useCallback(() => {
    if (!recording) return; // only animate while recording
    const data = getWaveformData();
    const canvas = canvasRef.current;
    if (canvas && data && data.length) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = waveColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        const arr = data as number[];
        const sliceWidth = canvas.width / arr.length;
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
          const sample = arr[i];
          if (sample === undefined) continue;
          const v = sample / 128.0; // 0-255 -> around 1 center
          const y = (v * canvas.height) / 2;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          x += sliceWidth;
        }
        ctx.stroke();
      }
    }
    animationRef.current = requestAnimationFrame(draw);
  }, [getWaveformData, recording, waveColor]);

  // Start animation loop when recording begins
  useEffect(() => {
    if (recording) {
      animationRef.current = requestAnimationFrame(draw);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [recording, draw]);

  const handleStartStop = useCallback(() => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  }, [recording, startRecording, stopRecording]);

  const handleDownload = useCallback(() => {
    if (!audioUrl) return;
    const a = document.createElement("a");
    a.href = audioUrl;
    a.download = "recording.webm";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [audioUrl]);

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", gap: 8 }}>
        <Button onClick={handleStartStop} title={recording ? "Stop" : "Record"} className="cursor-pointer">
          {recording ? <Icons.Stop /> : <Icons.Mic />}
        </Button>
        {audioUrl && (
          <Button onClick={handleDownload} title="Download" className="cursor-pointer">
            <Icons.Download />
          </Button>
        )}
      </div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ background: "#111", borderRadius: 4, width, height }}
      />
      {audioUrl && (
        <div style={{ width }}>
          <Player
            src={audioUrl}
            showNextPrevControls={false}
            autoplay={false}
            loop={false}
            color={waveColor}
          />
        </div>
      )}
    </div>
  );
}
