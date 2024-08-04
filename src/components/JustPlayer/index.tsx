import { ComponentProps, ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { Track } from "../../types";
import { FaPlay, FaPause } from "react-icons/fa";

interface Props extends ComponentProps<'div'> {
    track: Track;
    style?: React.CSSProperties;
    showProgress?: boolean;
}

/**
 * @param track - Track object
 * @param style - React CSS properties
 */

export default function JustPlayer({ track, style, showProgress, ...props }: Props): ReactElement<Props, "div"> {

    const [canPlay, setCanPlay] = useState<boolean>(false);
    const [audioElement, setAudioElement] = useState<HTMLAudioElement>();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);


    useEffect(() => {
        setAudioElement(new Audio(track.src));
    }, [track.src, audioElement]);

    useEffect(() => {
        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
         */
        audioElement?.addEventListener("canplaythrough", () => {
            setCanPlay(true);
        })
    }, [audioElement]);

    const play = () => {
        if (!canPlay) return;
        audioElement!.play();
        setIsPlaying(true);
    }

    const pause = () => {
        if (!canPlay) return;
        audioElement!.pause();
        setIsPlaying(false);
    }

    return <div {...props}
        style={style}
    >
        <button onClick={isPlaying ? pause : play}>
            {isPlaying ? <FaPause onClick={pause} /> : <FaPlay onClick={play} />}
        </button>
    </div>;
}