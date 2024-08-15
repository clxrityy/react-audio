import { GoDotFill } from "react-icons/go";
import { FaBackward, FaForward, FaPause, FaPlay, FaVolumeOff, FaVolumeUp, FaSpinner } from "react-icons/fa";

const CONFIG = {
    colors: {
        primary: "#007bff",
        secondary: "rgba(0, 0, 0, 0.6)",
    },
    themes: {
        light: {
            backgroundColor: "#eef0f1",
            textColor: "#000",
        },
        dark: {
            backgroundColor: "#242323",
            textColor: "#eef0f1",
        }
    },
    icons: {
        dot: GoDotFill,
        play: FaPlay,
        pause: FaPause,
        volumeUp: FaVolumeUp,
        volumeOff: FaVolumeOff,
        forward: FaForward,
        backward: FaBackward,
        loading: FaSpinner,
    }
} as const;

export default CONFIG;