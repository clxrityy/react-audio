import { ComponentPropsWithoutRef, ReactElement } from "react";
import { Track } from "../../types";
import styled from "styled-components";
import CONFIG from "../../config";

interface TrackItemProps extends ComponentPropsWithoutRef<"li"> {
    track: Track;
    selected: boolean;
    trackNumberLabel: string;
    color?: string;
}

const LiElement = styled.li<{ selected: boolean, color?: string }>`
        display: flex;
        align-items: center;
        padding: 0.5rem;
        z-index: 1;
        opacity: ${({ selected }) => (selected ? 1 : 0.7)};
        border-radius: 0.5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: ${({ selected, color }) => (selected ? color || CONFIG.colors.secondary : "transparent")};
        margin: 0.5rem 0;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
            opacity: 1;
        }
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-self: center;
    `;


const SpanElement = styled.span`
        flex: 1;
        text-align: center;
        font-size: 0.8em;
        font-weight: 700;
        opacity: 0.9;
        z-index: 2;
    `;

export default function LibraryTrackItem({ track, selected, trackNumberLabel, color, ...props }: TrackItemProps): ReactElement<TrackItemProps, "li"> {


    return (
        <LiElement
            selected={selected}
            color={color}
            {...props}
            onClick={props.onClick}
        >
            {track.thumbnail ? (
                <img src={track.thumbnail} alt={track.title} style={{ width: 25, height: 25, borderRadius: "50%" }} />
            ) : null}
            <SpanElement>{track.title}</SpanElement>
            <span>
                {selected ? <CONFIG.icons.dot size={24} /> : null}
            </span>
        </LiElement>
    )
}