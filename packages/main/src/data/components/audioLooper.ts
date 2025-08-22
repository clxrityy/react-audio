export const AudioLooperComponent = {
  name: "AudioLooper",
  category: "Audio Components",
  description: "Multi-track loop recording and playback component with individual track controls",
  features: [
    "Record multiple audio loops simultaneously",
    "Individual track controls (play, pause, volume, clear)",
    "Configurable loop duration (1-16 seconds)",
    "Master volume control",
    "Real-time progress visualization",
    "Track management (add, remove, clear all)",
    "Synchronized playback across all tracks"
  ],
  props: {
    className: {
      type: "string",
      description: "CSS class name for styling",
      required: false,
      default: undefined,
    },
    maxTracks: {
      type: "number",
      description: "Maximum number of tracks allowed",
      required: false,
      default: 8,
    },
    defaultLoopDuration: {
      type: "number",
      description: "Default loop duration in seconds",
      required: false,
      default: 4,
    },
    color: {
      type: "string",
      description: "Primary color for UI elements",
      required: false,
      default: "Colors.primary",
    },
  },
  usage: `import { AudioLooper } from "@clxrity/react-audio";

function MyComponent() {
  return (
    <AudioLooper 
      maxTracks={6}
      defaultLoopDuration={8}
      color="#ff6b9d"
    />
  );
}`,
  examples: [
    {
      title: "Basic Looper",
      code: `<AudioLooper />`,
    },
    {
      title: "Custom Configuration",
      code: `<AudioLooper 
  maxTracks={4}
  defaultLoopDuration={2}
  color="#00ff88"
/>`,
    },
    {
      title: "Styled Looper",
      code: `<AudioLooper 
  className="my-looper"
  maxTracks={12}
  defaultLoopDuration={16}
/>`,
    },
  ],
};
