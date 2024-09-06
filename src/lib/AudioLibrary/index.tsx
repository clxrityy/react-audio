import { useState } from 'react'
import styled from 'styled-components'
import { AudioLibraryProps, LibraryStyles } from '../../types'
import LibraryPlayer from './elements/Player'
import LibraryTrackItem from './elements/TrackItem'

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
    background-color: ${({ styles }) =>
        styles?.backgroundColor || 'transparent'};
    border: ${({ styles }) =>
        styles?.border || '1px solid rgba(240, 240, 240, 0.4)'};
    backdrop-filter: blur(10px);
`

const TrackListUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    align-self: center;
    justify-self: center;
    min-width: 100%;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
`

export default function AudioLibrary({
    tracks,
    styles,
    autoplay,
    btnStyleProps,
    ...props
}: AudioLibraryProps) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const currentTrack = tracks[currentTrackIndex]

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
                btnStyleProps={btnStyleProps}
                autoplay={autoplay}
                currentTrack={currentTrack}
                onNext={() => setCurrentTrackIndex((i) => i + 1)}
                onPrevious={() => setCurrentTrackIndex((i) => i - 1)}
                trackCount={tracks.length}
                trackIndex={currentTrackIndex}
            />
        </ContainerDiv>
    )
}
