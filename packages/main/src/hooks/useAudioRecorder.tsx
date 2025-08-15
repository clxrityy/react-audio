import { useState, useRef, useCallback, useEffect } from "react";

export function useAudioRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  // const animationFrameRef = useRef<number | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  // Use explicit generic so it matches AnalyserNode expectations (Uint8Array<ArrayBuffer>)
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null);

  const startRecording = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Setup recorder
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];
    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) {
        audioChunksRef.current.push(e.data);
      }
    };
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      setAudioUrl(URL.createObjectURL(blob));
    };
    mediaRecorderRef.current.start();

    // Setup analyser for visualization (best-effort; ignore if unavailable in environment)
    try {
      if (typeof AudioContext !== "undefined") {
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        sourceRef.current =
          audioContextRef.current.createMediaStreamSource(stream);
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.fftSize = 2048;
        const bufferLength = analyserRef.current.fftSize; // equals fftSize
        dataArrayRef.current = new Uint8Array(
          bufferLength,
        ) as Uint8Array<ArrayBuffer>;
      }
    } catch {
      // Swallow – visualisation simply disabled
    }

    setRecording(true);
  }, []);

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop();
    // Stop all tracks on the underlying stream to release microphone
    try {
      const stream = mediaRecorderRef.current?.stream as unknown as
        | MediaStream
        | undefined;
      stream?.getTracks?.().forEach((t) => t.stop());
    } catch {
      /* no-op */
    }
    audioContextRef.current?.close();
    setRecording(false);
  }, []);

  const getWaveformData = useCallback(() => {
    if (!analyserRef.current || !dataArrayRef.current) return [];
    analyserRef.current.getByteTimeDomainData(dataArrayRef.current);
    return [...dataArrayRef.current];
  }, []);

  useEffect(() => {
    return () => {
      if (audioContextRef.current) audioContextRef.current.close();
      try {
        const stream = mediaRecorderRef.current?.stream as unknown as
          | MediaStream
          | undefined;
        stream?.getTracks?.().forEach((t) => t.stop());
      } catch {
        /* no-op */
      }
    };
  }, []);

  return {
    recording,
    audioUrl,
    startRecording,
    stopRecording,
    getWaveformData,
  };
}
