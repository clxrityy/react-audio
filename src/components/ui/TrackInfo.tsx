import { ComponentPropsWithRef } from 'react'
import { Track } from '../../lib'
import { cn } from '../../util/cn'

interface TrackInfoProps extends ComponentPropsWithRef<'div'> {
    track: Track
}

export function TrackInfo({ track, ...props }: TrackInfoProps) {
    const { title, artist, thumbnail } = track

    if (!title && !artist && !thumbnail) {
        return null
    }

    return (
        <div
            {...props}
            className={cn('flex flex-row items-center gap-2', props.className)}
        >
            {thumbnail && (
                <img
                    src={thumbnail}
                    alt={`${title} by ${artist}`}
                    className="w-32 h-32 rounded-full"
                />
            )}
            <div className="flex flex-col items-center gap-2">
                {title && <h1 className="text-2xl font-bold">{title}</h1>}
                {artist && (
                    <div className="flex flex-row items-center gap-2">
                        {artist.thumbnail && artist.url ? (
                            <a
                                href={artist.url}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline underline-offset-2"
                            >
                                <img
                                    src={artist.thumbnail}
                                    alt={artist.name}
                                    className="w-8 h-8 rounded-full"
                                />
                            </a>
                        ) : (
                            artist.thumbnail && (
                                <img
                                    src={artist.thumbnail}
                                    alt={artist.name}
                                    className="w-8 h-8 rounded-full"
                                />
                            )
                        )}
                        <div className="flex flex-col items-center gap-1">
                            {artist.url ? (
                                <a
                                    href={artist.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {artist.name}
                                </a>
                            ) : (
                                <span>{artist.name}</span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
