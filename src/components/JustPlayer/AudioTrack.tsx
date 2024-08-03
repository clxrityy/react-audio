import { Track } from "../../types";

type Props = {
    track: Track;
    audioRef: React.MutableRefObject<HTMLAudioElement>;
}

export default function AudioTrack({ track, audioRef, ...props }: Props) {
    return (
        <audio
            src={track.src}
            ref={audioRef}
            {...props}
        />
    );
}