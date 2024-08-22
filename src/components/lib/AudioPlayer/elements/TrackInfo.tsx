import { ComponentPropsWithRef } from 'react'
import styled from 'styled-components'
import CONFIG from '../../../../config'
import { Track } from '../../../../types'

const TrackInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 100%;
    max-width: 640px;
`

const Thumbnail = styled.img`
    width: 100%;
    max-width: 100px;
    border-radius: 0.5rem;
    transition: transform 0.2s ease-in-out;

    @media only screen and (max-width: 600px) {
        max-width: 100%;
    }
`

const TrackInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    justify-items: center;
    width: 100%;
    max-width: 640px;
`

const TrackTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
`

const TrackAuthorLink = styled.a`
    font-size: 0.85rem;
    font-weight: 400;
    text-align: center;
    color: ${CONFIG.colors.primary};
    text-decoration: none;
    opacity: 0.75;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 1;
    }
`

interface TrackInfoProps extends ComponentPropsWithRef<'div'> {
    track: Track
}

export default function TrackInfo({ track, ...props }: TrackInfoProps) {
    return (
        <TrackInfoContainer {...props}>
            {track.thumbnail && (
                <Thumbnail src={track.thumbnail} alt={track.title} />
            )}
            <TrackInfoDiv>
                <TrackTitle>{track.title}</TrackTitle>
                <TrackAuthorLink href={track.author?.url}>
                    {track?.author?.name}
                </TrackAuthorLink>
            </TrackInfoDiv>
        </TrackInfoContainer>
    )
}
