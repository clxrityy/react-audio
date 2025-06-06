import { type Component } from "../../util";

export const OscillatorComponent: Component<"div"> = {
  title: "Oscillator",
  description: "An oscillator component that generates sound waves based on gain and frequency.",
  url: "",
  props: {
    type: {
      value: "OscillatorType",
      description: "The type of oscillator wave (e.g., sine, square, sawtooth, triangle).",
      required: false,
      default: "sine",
    },
    frequency: {
      value: "number",
      description: "The frequency of the oscillator in Hz.",
      required: false,
      default: 440,
    },
    gain: {
      value: "number",
      description: "The default gain (volume) of the oscillator.",
      required: false,
      default: 0.5,
    },
    isPlaying: {
      value: "boolean",
      description: "Whether the oscillator is currently playing sound.",
      required: false,
      default: false,
    },
    onFrequencyChange: {
      value: "(frequency: number) => void",
      description: "Callback function to handle frequency changes.",
      required: false,
      default: undefined,
    },
    onGainChange: {
      value: "(gain: number) => void",
      description: "Callback function to handle gain changes.",
      required: false,
      default: undefined,
    },
  }
}
