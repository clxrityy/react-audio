import type { Component } from "../../util";

export const SpectrogramComponent: Component<"div"> = {
  title: "Spectrogram",
  description: "A component that visualizes audio data as a spectrogram.",
  url: "",
  props: {
    src: {
      value: "string",
      description: "The source URL of the audio file to visualize.",
      required: true,
      default: undefined,
    },
    fftSize: {
      value: "number",
      description:
        "The size of the FFT (Fast Fourier Transform) used for audio analysis.",
      required: false,
      default: 1024,
    },
    width: {
      value: "number | string",
      description: "The width of the spectrogram display.",
      required: false,
      default: "100%",
    },
    height: {
      value: "number | string",
      description: "The height of the spectrogram display.",
      required: false,
      default: "25%",
    },
    minDecibels: {
      value: "number",
      description: "The minimum decibel level for the spectrogram display.",
      required: false,
      default: -100,
    },
    maxDecibels: {
      value: "number",
      description: "The maximum decibel level for the spectrogram display.",
      required: false,
      default: -25,
    },
    colorMap: {
      value: "string[]",
      description:
        "An array of colors to use for the spectrogram visualization.",
      required: false,
      default: ["#111", "#ff0000", "#ffff00", "#ffffff"],
    },
    smoothingTimeConstant: {
      value: "number",
      description: "The smoothing time constant for the analyser node.",
      required: false,
      default: 0.8,
    },
    onFrameUpdate: {
      value: "(data: Uint8Array) => void",
      description: "Callback function to handle frame updates with audio data.",
      required: false,
      default: undefined,
    },
    loop: {
      value: "boolean",
      description: "Whether to loop the audio playback.",
      required: false,
      default: false,
    },
    fillStyle: {
      value: "string",
      description: "The fill style for the spectrogram canvas.",
      required: false,
      default: undefined,
    },
  },
};
