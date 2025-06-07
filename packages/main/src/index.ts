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
} from "./components/lib";

// DATA
export { components } from "./data";

// HOOKS
export { useAudioAnalyser } from "./hooks/useAudioAnalyser";

// TYPES
export type { FFTSze, BaseProps } from "./util";
