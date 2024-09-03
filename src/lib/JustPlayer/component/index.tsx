import { ComponentProps, ReactElement, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import CONFIG from '../../../config'
import { Loading } from '../../../styles/elements'
import { Track } from '../../../types'

interface Props extends ComponentProps<'div'> {
    track: Track
    style?: React.CSSProperties
    size?: number
}

/**
 * @param track - Track object
 * @param style - React CSS properties
 * @param size - Number
 */

export default function JustPlayer({
    track,
    style,
    size,
    ...props
}: Props): ReactElement<Props, 'div'> {
    const [canPlay, setCanPlay] = useState<boolean>(false)
    const [audioElement, setAudioElement] = useState<HTMLAudioElement>()
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    if (!audioElement) {
        if (typeof Audio !== 'undefined') setAudioElement(new Audio(track.src))
    } else {
        audioElement.addEventListener('canplaythrough', () => {
            setCanPlay(true)
        })
    }

    const play = () => {
        if (!canPlay) return
        audioElement!.play()
        setIsPlaying(true)
    }

    const pause = () => {
        if (!canPlay) return
        audioElement!.pause()
        setIsPlaying(false)
    }

    return (
        <div {...props} style={style}>
            {canPlay && audioElement !== undefined ? (
                <div>
                    <button onClick={isPlaying ? pause : play}>
                        {isPlaying ? (
                            <FaPause size={size} />
                        ) : (
                            <FaPlay size={size} />
                        )}
                    </button>
                </div>
            ) : (
                <Loading>
                    <CONFIG.icons.loading size={size} />
                </Loading>
            )}
        </div>
    )
}
