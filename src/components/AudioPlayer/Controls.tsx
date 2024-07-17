import { useCallback, useEffect, useRef, useState } from "react";
import { FaBackward, FaForward, FaPlay, FaPause, FaVolumeDown, FaVolumeOff, FaVolumeUp } from "react-icons/fa";

type Props = {
    audioRef: React.MutableRefObject<HTMLAudioElement>;
    progressBarRef: React.MutableRefObject<HTMLInputElement>;
    setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
    duration: number;
}

export default function Controls({ audioRef, progressBarRef, setTimeProgress, duration }: Props) {

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(60);
    const [muteVolume, setMuteVolume] = useState<boolean>(false);

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    const playAnimationRef = useRef<number>();

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;

        setTimeProgress(currentTime);

        progressBarRef.current.value = currentTime.toString();
        progressBarRef.current.style.setProperty('--range-progress', `${(Number(progressBarRef.current.value) / duration)}%`);

    }, [audioRef, setTimeProgress, duration, progressBarRef]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);

    const skipForward = () => {
        audioRef.current.currentTime += 10;
    }

    const skipBackward = () => {
        audioRef.current.currentTime -= 10;
    }

    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;
            audioRef.current.muted = muteVolume;
        }
    }, [volume, muteVolume, audioRef]);

    const controlButtonStyle = {
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        marginRight: "10px",
    }


    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
            }}
        >
            <div>
                <button style={controlButtonStyle} onClick={togglePlay}>
                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                </button>
                <button style={controlButtonStyle} onClick={skipForward}>
                    <FaForward size={20} />
                </button>
                <button style={controlButtonStyle} onClick={skipBackward}>
                    <FaBackward size={20} />
                </button>
            </div>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <button onClick={() => setMuteVolume((prev) => !prev)}>
                    {
                        muteVolume || volume < 5 ? (
                            <FaVolumeOff size={20} />
                        ) : volume < 40 ? (
                            <FaVolumeDown size={20} />
                        ) : (
                            <FaVolumeUp size={20} />
                        )
                    }
                </button>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(parseInt(e.target.value))}
                    style={{
                        background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`
                    }}
                />
            </div>
        </div>
    )
}