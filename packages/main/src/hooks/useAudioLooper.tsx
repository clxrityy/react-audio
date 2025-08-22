import { useState, useRef, useCallback, useEffect } from "react";

export interface LoopTrack {
  id: string;
  audioUrl: string | null;
  isPlaying: boolean;
  isRecording: boolean;
  volume: number;
  duration: number;
}

export interface UseAudioLooperReturn {
  tracks: LoopTrack[];
  isRecording: boolean;
  masterVolume: number;
  loopDuration: number;
  currentTime: number;
  addTrack: () => string;
  removeTrack: (trackId: string) => void;
  startRecording: (trackId: string) => void;
  stopRecording: (trackId: string) => void;
  togglePlayback: (trackId: string) => void;
  clearTrack: (trackId: string) => void;
  setTrackVolume: (trackId: string, volume: number) => void;
  setMasterVolume: (volume: number) => void;
  setLoopDuration: (duration: number) => void;
  startAllTracks: () => void;
  stopAllTracks: () => void;
  clearAllTracks: () => void;
}

export function useAudioLooper(): UseAudioLooperReturn {
  const [tracks, setTracks] = useState<LoopTrack[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [masterVolume, setMasterVolumeState] = useState(0.8);
  const [loopDuration, setLoopDurationState] = useState(4); // seconds
  const [currentTime, setCurrentTime] = useState(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaRecordersRef = useRef<Map<string, MediaRecorder>>(new Map());
  const audioElementsRef = useRef<Map<string, HTMLAudioElement>>(new Map());
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Initialize audio context
  useEffect(() => {
    if (typeof AudioContext !== "undefined") {
      audioContextRef.current = new AudioContext();
    }
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  // Loop timer for synchronization
  useEffect(() => {
    if (tracks.some(t => t.isPlaying) || isRecording) {
      startTimeRef.current = Date.now();
      intervalRef.current = window.setInterval(() => {
        const elapsed = (Date.now() - startTimeRef.current) / 1000;
        setCurrentTime(elapsed % loopDuration);
      }, 16); // ~60fps
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentTime(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [tracks, isRecording, loopDuration]);

  const addTrack = useCallback(() => {
    const id = `track-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newTrack: LoopTrack = {
      id,
      audioUrl: null,
      isPlaying: false,
      isRecording: false,
      volume: 0.8,
      duration: loopDuration,
    };

    setTracks(prev => [...prev, newTrack]);
    return id;
  }, [loopDuration]);

  const removeTrack = useCallback((trackId: string) => {
    // Stop and cleanup any recording/playback
    const mediaRecorder = mediaRecordersRef.current.get(trackId);
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
    }
    mediaRecordersRef.current.delete(trackId);

    const audioElement = audioElementsRef.current.get(trackId);
    if (audioElement) {
      audioElement.pause();
      if (audioElement.src) {
        URL.revokeObjectURL(audioElement.src);
      }
    }
    audioElementsRef.current.delete(trackId);

    setTracks(prev => prev.filter(t => t.id !== trackId));
  }, []);

  const startRecording = useCallback(async (trackId: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(blob);

        setTracks(prev => prev.map(track =>
          track.id === trackId
            ? { ...track, audioUrl, isRecording: false }
            : track
        ));

        // Stop all tracks on the stream
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      mediaRecordersRef.current.set(trackId, mediaRecorder);

      setTracks(prev => prev.map(track =>
        track.id === trackId
          ? { ...track, isRecording: true }
          : track
      ));

      setIsRecording(true);

      // Auto-stop recording after loop duration
      setTimeout(() => {
        if (mediaRecorder.state === "recording") {
          mediaRecorder.stop();
          setIsRecording(false);
        }
      }, loopDuration * 1000);

    } catch (error) {
      console.error("Failed to start recording:", error);
    }
  }, [loopDuration]);

  const stopRecording = useCallback((trackId: string) => {
    const mediaRecorder = mediaRecordersRef.current.get(trackId);
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
    }
    setIsRecording(false);
  }, []);

  const togglePlayback = useCallback((trackId: string) => {
    setTracks(prev => prev.map(track => {
      if (track.id === trackId && track.audioUrl) {
        const willPlay = !track.isPlaying;

        // Handle audio element
        let audioElement = audioElementsRef.current.get(trackId);
        if (!audioElement && track.audioUrl) {
          audioElement = new Audio(track.audioUrl);
          audioElement.loop = true;
          audioElement.volume = track.volume * masterVolume;
          audioElementsRef.current.set(trackId, audioElement);
        }

        if (audioElement) {
          if (willPlay) {
            audioElement.currentTime = currentTime % loopDuration;
            audioElement.play().catch(console.error);
          } else {
            audioElement.pause();
          }
        }

        return { ...track, isPlaying: willPlay };
      }
      return track;
    }));
  }, [currentTime, loopDuration, masterVolume]);

  const clearTrack = useCallback((trackId: string) => {
    // Stop playback
    const audioElement = audioElementsRef.current.get(trackId);
    if (audioElement) {
      audioElement.pause();
      if (audioElement.src) {
        URL.revokeObjectURL(audioElement.src);
      }
    }

    setTracks(prev => prev.map(track =>
      track.id === trackId
        ? { ...track, audioUrl: null, isPlaying: false, isRecording: false }
        : track
    ));
  }, []);

  const setTrackVolume = useCallback((trackId: string, volume: number) => {
    setTracks(prev => prev.map(track => {
      if (track.id === trackId) {
        const audioElement = audioElementsRef.current.get(trackId);
        if (audioElement) {
          audioElement.volume = volume * masterVolume;
        }
        return { ...track, volume };
      }
      return track;
    }));
  }, [masterVolume]);

  const setMasterVolume = useCallback((volume: number) => {
    setMasterVolumeState(volume);
    // Update all playing audio elements
    audioElementsRef.current.forEach((audioElement, trackId) => {
      const track = tracks.find(t => t.id === trackId);
      if (track && audioElement) {
        audioElement.volume = track.volume * volume;
      }
    });
  }, [tracks]);

  const setLoopDuration = useCallback((duration: number) => {
    setLoopDurationState(duration);
    setTracks(prev => prev.map(track => ({ ...track, duration })));
  }, []);

  const startAllTracks = useCallback(() => {
    tracks.forEach(track => {
      if (track.audioUrl && !track.isPlaying) {
        togglePlayback(track.id);
      }
    });
  }, [tracks, togglePlayback]);

  const stopAllTracks = useCallback(() => {
    tracks.forEach(track => {
      if (track.isPlaying) {
        togglePlayback(track.id);
      }
    });
  }, [tracks, togglePlayback]);

  const clearAllTracks = useCallback(() => {
    tracks.forEach(track => clearTrack(track.id));
  }, [tracks, clearTrack]);

  return {
    tracks,
    isRecording,
    masterVolume,
    loopDuration,
    currentTime,
    addTrack,
    removeTrack,
    startRecording,
    stopRecording,
    togglePlayback,
    clearTrack,
    setTrackVolume,
    setMasterVolume,
    setLoopDuration,
    startAllTracks,
    stopAllTracks,
    clearAllTracks,
  };
}
