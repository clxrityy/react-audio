import { Track } from "../../types";
import { FaMusic } from "react-icons/fa";

type Props = {
    track: Track;
    audioRef: React.MutableRefObject<HTMLAudioElement>;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
    progressBarRef: React.MutableRefObject<HTMLInputElement>;
}

export default function AudioTrack({ track, audioRef, setDuration, progressBarRef}: Props) {

    return (
        <div>
            <audio
                src={track.src}
                ref={audioRef}
                onLoadedMetadata={(e) => {
                    const seconds = e.currentTarget.duration;
                    setDuration(seconds);
                    progressBarRef.current.max = String(seconds);
                }}
            />
            <div>
                {track.thumbnail ? (
                    <img style={{
                        width: "25px",
                        height: "25px",
                    }} src={track.thumbnail} alt="thumbnail" />
                ) : <div style={{
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                        <FaMusic size={25} />
                    </div>
                }
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                }}
            >
                <p
                    style={{
                        marginRight: "5px",
                        padding: 0,
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    {track.title}
                </p>
                <a
                    href={track.author?.url}
                    style={{
                        padding: 0,
                        fontSize: "14px",
                        fontWeight: "normal",
                        cursor: "pointer",
                    }}
                >
                    {track.author?.name && `${track.author.name}`}
                </a>
            </div>
        </div>
    )
}