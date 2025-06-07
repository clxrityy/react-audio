import { Colors, type Component } from "../../util";

export const PlayerComponent: Component<"audio"> = {
  title: "Player",
  description: "A simple audio player component.",
  url: "",
  props: {
    src: {
      value: "string",
      description: "The source URL of the audio file.",
      required: true,
      default: undefined,
    },
    size: {
      value: "number",
      description: "The size of the player.",
      required: false,
      default: undefined,
    },
    color: {
      value: "string",
      description: "The color of the player.",
      required: false,
      default: Colors.primary,
    },
    autoplay: {
      value: "boolean",
      description: "Whether the audio should start playing automatically.",
      required: false,
      default: false,
    },
    loop: {
      value: "boolean",
      description: "Whether the audio should loop.",
      required: false,
      default: false,
    },
    showProgress: {
      value: "boolean",
      description: "Whether to show the progress bar.",
      required: false,
      default: true,
    },
    showVolume: {
      value: "boolean",
      description: "Whether to show the volume control.",
      required: false,
      default: true,
    },
    showNextPrevControls: {
      value: "boolean",
      description:
        "Whether to show the next and previous controls (used within ShufflePlayer).",
      required: false,
      default: false,
    },
    audioRef: {
      value: "RefObject<HTMLAudioElement | null>",
      description: "A ref to the audio element.",
      required: false,
      default: undefined,
    },
    onNext: {
      value: "() => void",
      description:
        "Callback function for the next button. (used within ShufflePlayer)",
      required: false,
      default: undefined,
    },
    onPrev: {
      value: "() => void",
      description:
        "Callback function for the previous button. (used within ShufflePlayer)",
      required: false,
      default: undefined,
    },
  },
};
