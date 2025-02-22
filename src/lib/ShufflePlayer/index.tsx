import { ComponentProps, useState } from 'react'
import { Track } from '../types'
import { cn } from '../../util/cn'
import { TrackItem } from '../../components/ui/TrackItem'
import { Player } from '../Player'
import { COLORS } from '../../config'

export interface ShufflePlayerProps extends ComponentProps<'div'> {
    tracks: Track[]
    autoplay?: boolean
    color?: string
    shuffle?: boolean
    onShuffle?: () => void
    showTracks?: boolean
    border?: string
}

export function ShufflePlayer({
    tracks,
    autoplay = false,
    color = COLORS.primary,
    shuffle = false,
    onShuffle,
    showTracks = true,
    border = '1px solid #e4e4e775',
    ...props
}: ShufflePlayerProps) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0)
    const currentTrack = tracks[currentTrackIndex]

    if (shuffle) {
        setCurrentTrackIndex(Math.floor(Math.random() * tracks.length))
    }

    return (
        <div
            {...props}
            className={cn(
                'flex flex-col gap-4 p-4 items-center justify-center relative w-full max-w-[800px] rounded-lg bg-transparent backdrop-blur-sm',
                props.className
            )}
            style={{
                border: border,
            }}
        >
            <ul className="list-none p-0 m-0 w-full flex flex-col gap-0 self-center justify-self-center min-w-full overflow-y-scroll scroll-smooth">
                {showTracks &&
                    tracks.map((track, index) => (
                        <TrackItem
                            color={color}
                            onClick={() => setCurrentTrackIndex(index)}
                            key={index}
                            selected={index === currentTrackIndex}
                            track={track}
                            trackNumberLabel={`${index + 1}`}
                        />
                    ))}
                <Player
                    color={color}
                    autoplay={autoplay}
                    track={currentTrack}
                    onNext={() => setCurrentTrackIndex((i) => i + 1)}
                    onPrev={() => setCurrentTrackIndex((i) => i - 1)}
                    showNextPrevControls={true}
                />
            </ul>
        </div>
    )
}
