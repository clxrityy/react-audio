import { Component } from "../../util";

export const WaveformComponent: Component<"canvas"> = {
  title: "Waveform",
  description:
    "A waveform component that visualizes audio data in a canvas element.",
  url: "",
  props: {
    src: {
      value: "string",
      description: "The source URL of the audio file to visualize. (internal unless CORS settings are configured)",
      required: true,
      default: undefined,
    },
    size: {
      value: "number",
      description: "The size of the canvas element in pixels.",
      required: false,
      default: 420,
    },
    color: {
      value: "string",
      description: "The color of the waveform.",
      required: false,
      default: "primary",
    },
    autoplay: {
      value: "boolean",
      description: "Whether to autoplay the audio when the component is mounted.",
      required: false,
      default: false,
    },
    loop: {
      value: "boolean",
      description: "Whether to loop the audio playback.",
      required: false,
      default: false,
    },
    showProgress: {
      value: "boolean",
      description: "Whether to show the progress of the audio playback.",
      required: false,
      default: false,
    },
    showVolume: {
      value: "boolean",
      description: "Whether to show the volume control.",
      required: false,
      default: false,
    },
    fftSize: {
      value: "number",
      description: "The size of the FFT (Fast Fourier Transform) used for audio analysis.",
      required: false,
      default: 2048,
    },
    onLoad: {
      value: "() => void",
      description: "Callback function to be called when the audio is loaded.",
      required: false,
      default: undefined,
    },
    audioRef: {
      value: "RefObject<HTMLAudioElement | null> | null",
      description: "A reference to the HTML audio element. If not provided, a new ref will be created.",
      required: false,
      default: null,
    },
  }
}
