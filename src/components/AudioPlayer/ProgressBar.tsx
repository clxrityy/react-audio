import { useEffect } from "react";

type Props = {
    audioRef: React.MutableRefObject<HTMLAudioElement>;
    progressBarRef: React.MutableRefObject<HTMLInputElement>;
    timeProgress: number;
    duration: number;
}


export default function ProgressBar({ audioRef, progressBarRef, timeProgress, duration }: Props) {
    useEffect(() => {
        audioRef.current.currentTime = Number(progressBarRef.current.value);

    }, [audioRef, progressBarRef]);

    const formatTime = (time: number): string => {
        let result = `00:00`;

        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            result = `${formatMinutes}:${formatSeconds}`;
        }
        return result;
    }

    const rangeProgressStyle = { "--range-progress": `${(timeProgress / duration) * 100}%` } as React.CSSProperties;

    const inputStyle: React.CSSProperties = {
        WebkitAppearance: "none",
        position: "relative",
        width: "100%",
        height: "2px",
        backgroundColor: "#c1b6bc",
        borderRadius: "4px",
        cursor: "pointer",
        ...rangeProgressStyle
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
        }}>
            <span
                style={{
                    color: "inherit",
                    fontSize: "inherit",
                    opacity: 0.7
                }}
            >
                {formatTime(timeProgress)}
            </span>
            <input
                style={inputStyle}
                ref={progressBarRef}
                type="range"
                defaultValue={timeProgress}
                onChange={(e) => {
                    audioRef.current.currentTime = Number(e.target.value);
                }}
            />
            <span
                style={{
                    color: "inherit",
                    fontSize: "inherit",
                    opacity: 0.7
                }}
            >
                {formatTime(duration)}
            </span>
        </div>
    )
}