import { ComponentProps, ReactElement } from "react";
import { Track } from "../../types";
import { FaPause, FaPlay } from "react-icons/fa";

interface TrackItemProps extends ComponentProps<"li"> {
    track: Track;
    selected: boolean;
    trackNumberLabel: string;
    color?: string;
}
export default function LibraryTrackItem({ track, selected, trackNumberLabel, color, ...props }: TrackItemProps): ReactElement<TrackItemProps, "li"> {


    return (
        <li
            {...props}
            onClick={props.onClick}
            style={{
                display: "flex",
                alignItems: "center",
                padding: "0.5rem",
                backgroundColor: selected ? !color ? "##32a852" : color : "transparent",
            }}
        >
            <span style={{ display: "inline-block", fontSize: "0.8em"}}>{trackNumberLabel}</span>
            <span style={{ flex: 1, textAlign: "center" }}>{track.title}</span>
            <span>
                {selected ? <FaPause size={20} /> : <FaPlay size={20} />}
            </span>
        </li>
    )
}