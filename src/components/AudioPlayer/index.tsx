import { ComponentProps, ReactElement, useRef, useState } from "react";
import AudioTrack from "./AudioTrack";
import { Track } from "../../types";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

interface Props extends ComponentProps<'div'> {
    track: Track;
    style?: React.CSSProperties;
}

/**
 * @param style - React CSS properties
 */

export default function AudioPlayer({ track, style, ...props }: Props): ReactElement<Props, "div"> {

    const [duration, setDuration] = useState<number>(0);
    const [timeProgress, setTimeProgress] = useState<number>(0);
    const progressBarRef = useRef<HTMLInputElement>();
    const audioRef = useRef<HTMLAudioElement>(new Audio(track.src));


    return <div {...props} style={
        style ? style : {
            backgroundColor: "inherit",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
        }
    }>
        <div style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
        }}>
            <AudioTrack
                track={track}
                // @ts-ignore
                audioRef={audioRef}
                setDuration={setDuration}
                // @ts-ignore
                progressBarRef={progressBarRef}
            />
            <Controls
                // @ts-ignore
                audioRef={audioRef}
                // @ts-ignore
                progressBarRef={progressBarRef}
                setTimeProgress={setTimeProgress}
                duration={duration}
            />
            <ProgressBar
                // @ts-ignore
                audioRef={audioRef}
                // @ts-ignore
                progressBarRef={progressBarRef}
                timeProgress={timeProgress}
                duration={duration}
            />
        </div>
    </div>
}