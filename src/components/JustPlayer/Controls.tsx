import { ComponentProps, useCallback, useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

type Props = {
    audioRef: React.MutableRefObject<HTMLAudioElement>;
} & ComponentProps<"div">;

export default function Controls({ audioRef, ...props }: Props) {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, audioRef]);

    return (
        <div {...props}>
            <button style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                color: "inherit"
            }} onClick={togglePlay}>
                {isPlaying ? <FaPause size={18} onClick={togglePlay} /> : <FaPlay onClick={togglePlay} />}
            </button>
        </div>
    )
}