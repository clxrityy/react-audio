import "./index.css";

// COMPONENTS
export {
  Player,
  type PlayerProps,
  ShufflePlayer,
  type ShufflePlayerProps,
  Waveform,
  type WaveformProps,
  Oscillator,
  type OscillatorProps,
  Spectrogram,
  type SpectrogramProps,
  SpectroGramDisplay,
  type SpectroGramDisplayProps,
  AudioRecorder,
  type AudioRecorderProps,
  AudioLooper,
  type AudioLooperProps,
} from "./components/lib";

// DATA
export { components } from "./data";

// HOOKS
export { useAudioAnalyser } from "./hooks/useAudioAnalyser";
export { useAudioLooper } from "./hooks/useAudioLooper";
export { useAudioRecorder } from "./hooks/useAudioRecorder";

// TYPES
export type { FFTSize, BaseProps } from "./util";
