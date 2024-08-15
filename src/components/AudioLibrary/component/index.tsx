import { ComponentPropsWithRef, useState } from "react";
import styled from "styled-components";
import { LibraryStyles, Track } from "../../../types";
import LibraryPlayer from "../elements/Player";
import LibraryTrackItem from "../elements/TrackItem";

interface AudioLibraryProps extends ComponentPropsWithRef<"div"> {
    tracks: Track[];
    styles?: LibraryStyles;
}

const ContainerDiv = styled.div<{ styles?: LibraryStyles }>`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    justify-items: center;
    position: relative;
    width: 100%;
    max-width: 800px;
    border-radius: 0.5rem;
    background-color: ${({ styles }) => styles?.backgroundColor || "transparent"};
    border: ${({ styles }) => styles?.border || "1px solid rgba(240, 240, 240, 0.4)"};
    backdrop-filter: blur(10px);
`;

const TrackListUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-self: center;
    justify-self: center;
    min-width: 100%;
`;

export default function AudioLibrary({ tracks, styles, ...props }: AudioLibraryProps) {

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const currentTrack = tracks[currentTrackIndex];

    return (
        <ContainerDiv styles={styles} {...props}>
            <TrackListUl>
                {tracks.map((track, index) => (
                    <LibraryTrackItem
                        onClick={() => setCurrentTrackIndex(index)}
                        key={index}
                        selected={index === currentTrackIndex}
                        track={track}
                        trackNumberLabel={index.toString()}
                    />
                ))}
            </TrackListUl>
            <LibraryPlayer
                currentTrack={currentTrack}
                onNext={() => setCurrentTrackIndex((i) => i + 1)}
                onPrevious={() => setCurrentTrackIndex((i) => i - 1)}
                trackCount={tracks.length}
                trackIndex={currentTrackIndex}
            />
        </ContainerDiv>
    )

}