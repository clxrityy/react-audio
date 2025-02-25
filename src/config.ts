import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import StopIcon from '@mui/icons-material/Stop'
import FastForwardIcon from '@mui/icons-material/FastForward'
import FastRewindIcon from '@mui/icons-material/FastRewind'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { SvgIconComponent } from '@mui/icons-material'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import SaveIcon from '@mui/icons-material/Save';

interface Icons {
    [key: string]: SvgIconComponent
}

export const ICONS: Icons = {
    play: PlayArrowIcon,
    pause: PauseIcon,
    stop: StopIcon,
    fastForward: FastForwardIcon,
    fastRewind: FastRewindIcon,
    skipNext: SkipNextIcon,
    skipPrevious: SkipPreviousIcon,
    loading: HourglassEmptyIcon,
    volumeOff: VolumeOffIcon,
    volumeMute: VolumeMuteIcon,
    volumeDown: VolumeDownIcon,
    volumeUp: VolumeUpIcon,
    selected: RadioButtonCheckedIcon,
    unselected: RadioButtonUncheckedIcon,
    save: SaveIcon,
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
