import { PlayerComponent } from "./player";
import { ShufflePlayerComponent } from "./shufflePlayer";
import { WaveformComponent } from "./waveform";
import { OscillatorComponent } from "./oscillator";
import { SpectrogramComponent } from "./spectrogram";
import { AudioRecorderComponent } from "./audioRecorder";
import { AudioLooperComponent } from "./audioLooper";

export const components = {
  Player: PlayerComponent,
  ShufflePlayer: ShufflePlayerComponent,
  Waveform: WaveformComponent,
  Oscillator: OscillatorComponent,
  Spectrogram: SpectrogramComponent,
  AudioRecorder: AudioRecorderComponent,
  AudioLooper: AudioLooperComponent,
} as const;
