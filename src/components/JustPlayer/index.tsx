import { ComponentProps, ReactElement, useRef, useState } from "react";
import { Track } from "../../types";
import Controls from "./Controls";
import AudioTrack from "./AudioTrack";

interface Props extends ComponentProps<'div'> {
    track: Track;
    style?: React.CSSProperties;
}

export default function JustPlayer({ track, style, ...props }: Props): ReactElement<Props, "div"> { 

    const audioRef = useRef<HTMLAudioElement>();

    return <div {...props}
        style={style}
    >
        <AudioTrack
            track={track}
            // @ts-ignore
            audioRef={audioRef}
        />
        <Controls
            // @ts-ignore
            audioRef={audioRef}
        />
    </div>;
}