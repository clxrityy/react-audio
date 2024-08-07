import { useEffect } from "react";
import styled from "styled-components";

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

    const ProgressInput = styled.input`
        --range-progress: 0;
        -webkit-appearance: none;
        position: relative;
        width: 100%;
        height: 2px;
        cursor: pointer;

        &::before {
            content: '';
            height: 2px;
            width: var(--range-progress);
            position: absolute;
            top: 0;
            left: 0;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
        }
    `

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
            <ProgressInput
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