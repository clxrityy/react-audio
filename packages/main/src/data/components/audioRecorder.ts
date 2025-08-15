import { type Component } from "../../util";

export const AudioRecorderComponent: Component<"div"> = {
  title: "AudioRecorder",
  description: "Record, preview, and download audio.",
  url: "",
  props: {
    waveColor: {
      value: "string",
      default: "rgb(236, 106, 177)",
      description: "The color of the waveform & preview.",
      required: false,
    },
    width: {
      value: "number",
      default: 400,
      description: "The width of the audio recorder.",
      required: false,
    },
    height: {
      value: "number",
      default: 80,
      description: "The height of the audio recorder.",
      required: false,
    },
  },
};
