import { ComponentProps, useState } from 'react'
import { Track } from '../types'
import { cn } from '../../util/cn'
import { TrackItem } from '../../components/ui/TrackItem'
import { Player } from '../Player'

export interface ShufflePlayerProps extends ComponentProps<'div'> {
    tracks: Track[]
    autoplay?: boolean
    color?: string
    shuffle?: boolean
    onShuffle?: () => void
}

export function ShufflePlayer({
    tracks,
    autoplay = false,
    color,
    shuffle = false,
    onShuffle,
    ...props
}: ShufflePlayerProps) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0)
    const currentTrack = tracks[currentTrackIndex]

    if (onShuffle && shuffle) {
        onShuffle()
        setCurrentTrackIndex(Math.floor(Math.random() * tracks.length))
    }

    return (
        <div
            {...props}
            className={cn(
                'flex flex-col gap-4 p-4 items-center justify-center relative w-full max-w-[800px] rounded-lg bg-transparent border border-zinc-200/10 backdrop-blur-sm',
                props.className
            )}
        >
            <ul className="list-none p-0 m-0 w-full flex flex-col gap-0 self-center justify-self-center min-w-full overflow-y-scroll scroll-smooth">
                {tracks.map((track, index) => (
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
