import {
  Play,
  Pause,
  CircleStop,
  FastForward,
  Rewind,
  SkipForward,
  SkipBack,
  Hourglass,
  VolumeX,
  Volume1,
  Volume2,
  Square,
  SquareSquare,
  LoaderCircle,
} from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Icons: Record<string, any> = {
  Play,
  Pause,
  Stop: CircleStop,
  FastForward,
  Rewind,
  SkipNext: SkipForward,
  SkipPrevious: SkipBack,
  Loading: Hourglass,
  VolumeOff: VolumeX,
  VolumeMute: VolumeX,
  VolumeDown: Volume1,
  VolumeUp: Volume2,
  Selected: Square,
  Unselected: SquareSquare,
  Loader: LoaderCircle,
};

export const Colors = {
  primary: "rgb(236, 106, 177)",
  secondary: "rgb(121, 91, 132)",
  white: "#dddddd",
  black: "#111111",
};
