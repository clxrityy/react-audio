import { ComponentProps, ReactElement, useRef, useState } from "react";
import AudioTrack from "./Track";
import { Track } from "../../types";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

interface Props extends ComponentProps<'div'> {
    track: Track;
    backgroundColor?: string;
}

/**
 * @param backgroundColor - The background color of the player
 */

export default function AudioPlayer({ track, backgroundColor, ...props }: Props): ReactElement {

    const [duration, setDuration] = useState<number>(0);
    const [timeProgress, setTimeProgress] = useState<number>(0);

    const audioRef= useRef<HTMLAudioElement>();
    const progressBarRef = useRef<HTMLInputElement>();


    return <div {...props} style={{
                backgroundColor: backgroundColor || "#c1b6bc"
            }}>
                <div style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    padding: "20px",
                }}>
                    <AudioTrack
                        track={track}
                        audioRef={audioRef}
                        setDuration={setDuration}
                        progressBarRef={progressBarRef}
                    />
                    <Controls
                        audioRef={audioRef}
                        progressBarRef={progressBarRef}
                        setTimeProgress={setTimeProgress}
                        duration={duration}
                    />
                    <ProgressBar
                        audioRef={audioRef}
                        progressBarRef={progressBarRef}
                        timeProgress={timeProgress}
                        duration={duration}
                    />
                </div>
            </div>
}