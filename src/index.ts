import { default as AudioLibrary, default as LibraryPlayer, default as LibraryTrackItem } from './lib/AudioLibrary';
import AudioPlayer from './lib/AudioPlayer';
import JustPlayer from './lib/JustPlayer';
// import ProgressBar from './components/lib/AudioLibrary';
// import VolumeInput from './components/lib/AudioLibrary';
import Waveform from './lib/Waveform';
// import WaveformImage from './lib/WaveformImage';

import type { Track } from './types';

export {
    AudioLibrary,
    AudioPlayer,
    JustPlayer,
    LibraryPlayer,
    LibraryTrackItem,
    // ProgressBar,
    // VolumeInput,
    Waveform,
    // WaveformImage,
}

export type {
    Track
};
