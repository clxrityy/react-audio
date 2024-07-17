type Props = {
    audioRef: React.MutableRefObject<HTMLAudioElement>;
    progressBarRef: React.MutableRefObject<HTMLInputElement>;
    timeProgress: number;
    duration: number;
}


export default function ProgressBar({ audioRef, progressBarRef, timeProgress, duration }: Props) {
    const handleProgressChange = () => {
        audioRef.current.currentTime = Number(progressBarRef.current.value);
    }

    const formatTime = (time: number): string => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return `00:00`;
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
                    color: "#f50",
                    fontSize: "14px",
                    lineHeight: "46px",
                }}
            >
                {formatTime(timeProgress)}
            </span>
            <input style={{
                WebkitAppearance: "none",
                position: "relative",
                width: "100%",
                height: "2px",
                backgroundColor: "#c1b6bc",
                borderRadius: "4px",
                cursor: "pointer",
            }}
                ref={progressBarRef}
                defaultValue="0"
                type="range"
                onChange={handleProgressChange}
            />
            <span
                style={{
                    color: "#333",
                    fontSize: "14px",
                    lineHeight: "46px",
                }}
            >
                {formatTime(duration)}
            </span>
        </div>
    )
}