import {
    ComponentProps,
    ReactEventHandler,
    RefObject,
    useEffect,
    useState,
} from 'react'
import styled from 'styled-components'
import Button from '../../../components/ui/Button'
import ProgressBar from '../../../components/ui/Progress'
import Volume from '../../../components/ui/Volume'
import CONFIG from '../../../config'
import { Loading, TimeSpan } from '../../../styles/elements'
import { Track } from '../../../types'
import formatDurationDisplay from '../../../utils/formatDuration'

interface Props extends ComponentProps<'div'> {
    audioElement: RefObject<HTMLAudioElement>
    track: Track;
    showTrackInfo?: boolean;
}

const PlayerDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    position: absolute;
    border-radius: 0.5rem;
    background-color: transparent;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.25rem;
    align-items: center;
    justify-items: center;
    position: relative;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
`

const PlayerDivElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: evenly;
    align-items: center;
    gap: 0.25rem;
    margin-left: auto;
    margin-right: auto;
`

const PlayerButtonAndVolume = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 420px) {
        flex-direction: column;
    }
`

export default function Player({ audioElement, track, showTrackInfo, ...props }: Props) {
    const [duration, setDuration] = useState<number>(0)
    const [isReady, setIsReady] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(0.2)
    const [currentProgress, setCurrentProgress] = useState<number>(0)
    const [buffered, setBuffered] = useState<number>(0)

    const durationDisplay = formatDurationDisplay(duration)
    const elapsedDisplay = formatDurationDisplay(currentProgress)

    const handleVolumeChange = (value: number) => {
        if (!audioElement.current) return
        audioElement.current.volume = value
        setVolume(value)
    }

    const handleMuteUnmute = () => {
        if (!audioElement.current) return

        if (audioElement.current.volume !== 0) {
            audioElement.current.volume = 0
        } else {
            audioElement.current.volume = 1
        }
    }

    const togglePlayPause = async () => {

        if (!audioElement.current) return;

        if (isPlaying) {
            audioElement.current.pause()
            setIsPlaying(false)
        } else {
            try {
                await audioElement.current.play()
                setIsPlaying(true)
            } catch (err) {
                console.error(err)
            }
        }
    }

    const handleCanPlay: ReactEventHandler<HTMLAudioElement> = (e) => {
        e.currentTarget.volume = volume
        setIsReady(true)
    }

    const handleBufferProgress: ReactEventHandler<HTMLAudioElement> = (e) => {
        const audio = e.currentTarget
        const dur = audio.duration

        if (dur > 0) {
            for (let i = 0; i < audio.buffered.length; i++) {
                if (
                    audio.buffered.start(audio.buffered.length - 1 - i) <
                    audio.currentTime
                ) {
                    setBuffered(
                        audio.buffered.end(audio.buffered.length - 1 - i)
                    )
                    break
                }
            }
        }
    }

    const handleTimeUpdate: ReactEventHandler<HTMLAudioElement> = (e) => {
        setCurrentProgress(e.currentTarget.currentTime)
        handleBufferProgress(e)
    }

    const handleOnVolumeChange: ReactEventHandler<HTMLAudioElement> = (e) => {
        setVolume(e.currentTarget.volume)
        return e.currentTarget.volume
    }

    const handleOnPlaying: ReactEventHandler<HTMLAudioElement> = () => {
        setIsPlaying(true)
    }

    const handleOnPause: ReactEventHandler<HTMLAudioElement> = () => {
        setIsPlaying(false)
    }

    const handleDurationChange: ReactEventHandler<HTMLAudioElement> = (e) => {
        setDuration(e.currentTarget.duration)
    }

    useEffect(() => {
        if (!audioElement.current) return

        audioElement.current.src = track.src

        setIsReady(true)
    }, [track.src]);

    return (
        <PlayerDiv {...props}>
            <audio
                ref={audioElement}
                onCanPlay={handleCanPlay}
                onTimeUpdate={handleTimeUpdate}
                onVolumeChange={handleOnVolumeChange}
                onPlaying={handleOnPlaying}
                onPause={handleOnPause}
                onDurationChange={handleDurationChange}
                onProgress={handleBufferProgress}
                crossOrigin="anonymous"
            >
                <source src={track.src} type="audio/mpeg" />
            </audio>

            <Container>
                <PlayerDivElement>
                    <PlayerButtonAndVolume>
                        <Button
                            disabled={!isReady}
                            onClick={togglePlayPause}
                        >
                            {isPlaying ? (
                                <CONFIG.icons.pause />
                            ) : (
                                <CONFIG.icons.play />
                            )}
                        </Button>
                        <Volume
                            handleMute={handleMuteUnmute}
                            volume={volume}
                            volumeChange={handleVolumeChange}
                        />
                    </PlayerButtonAndVolume>
                    <TimeSpan>
                        <span>{elapsedDisplay}</span>
                        <span>/</span>
                        <span>{durationDisplay}</span>
                    </TimeSpan>
                    {buffered ? (
                        <ProgressBar
                            onChange={(e) =>
                                setCurrentProgress(e.target.valueAsNumber)
                            }
                            duration={duration}
                            current_progress={currentProgress}
                            buffered={buffered}
                        />
                    ) : (
                        <Loading />
                    )}
                </PlayerDivElement>
            </Container>

        </PlayerDiv>
    )
}
