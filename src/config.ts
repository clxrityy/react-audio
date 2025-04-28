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
  Volume,
  Volume1,
  Volume2,
  Square,
  SquareSquare,
} from 'lucide-react'

export const ICONS = {
  play: Play,
  pause: Pause,
  stop: CircleStop,
  fastForward: FastForward,
  fastRewind: Rewind,
  skipNext: SkipForward,
  skipPrevious: SkipBack,
  loading: Hourglass,
  volumeOff: Volume,
  volumeMute: VolumeX,
  volumeDown: Volume1,
  volumeUp: Volume2,
  selected: SquareSquare,
  unselected: Square,
} as const

export const COLORS = {
  primary: 'rgb(97, 123, 177)',
  secondary: '#6fa8dc',
  accent: '#e06666',
  background: '#232323',
  text: '#ededed',
  textSecondary: '#bfbfbf',
  backgroundSecondary: '#1a1a1a',
  backgroundTertiary: '#0d0d0d',
} as const
