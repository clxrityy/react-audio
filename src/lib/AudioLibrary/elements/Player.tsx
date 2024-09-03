import {
    ComponentPropsWithRef,
    ElementRef,
    ReactElement,
    ReactEventHandler,
    useEffect,
    useRef,
    useState,
} from 'react'
import styled from 'styled-components'
import Button from '../../../components/ui/Button'
import CONFIG from '../../../config'
import { Loading, TimeSpan } from '../../../styles/elements'
import { Track } from '../../../types'
import formatDurationDisplay from '../../../utils/formatDuration'
import ProgressBar from './ProgressBar'
import VolumeInput from './VolumeInput'

interface AudioLibraryProps extends ComponentPropsWithRef<'div'> {
    currentTrack?: Track
    trackIndex: number
    trackCount: number
    onNext: () => void
    onPrevious: () => void
}

const MainContainerDivElement = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    align-items: center;
    justify-items: stretch;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    align-items: center;
    justify-items: center;
    position: relative;
    width: 100%;
    max-width: 800px;
`

const ButtonsDivContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
`

const PlayerDivElement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const TextDivElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 1rem;
    width: 100%;
    text-align: center;
    white-space: nowrap;
`

const BottomDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const BottomVolumeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    flex-direction: row;
`

const ProgressTimeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    flex-direction: row;
    padding: 0.5rem;

    @media only screen and (min-width: 1000px) {
        flex-direction: column;
        align-items: start;
    }
`

export default function LibraryPlayer({
    currentTrack,
    trackIndex,
    trackCount,
    onNext,
    onPrevious,
    ...props
}: AudioLibraryProps): ReactElement<AudioLibraryProps, 'div'> {
    // states
    const [duration, setDuration] = useState<number>(0)
    const [isReady, setIsReady] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(0.2)
    const [currentProgress, setCurrentProgress] = useState<number>(0)
    const [buffered, setBuffered] = useState<number>(0)

    const audioElement = useRef<ElementRef<'audio'>>(null)

    // values
    const durationDisplay = formatDurationDisplay(duration)
    const elapsedDisplay = formatDurationDisplay(currentProgress)

    // handlers
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
    const togglePlayPause = () => {
        if (!audioElement.current) return

        if (isPlaying) {
            audioElement.current.pause()
            setIsPlaying(false)
        } else {
            audioElement.current.play()
            setIsPlaying(true)
        }
    }
    const handleCanPlay: ReactEventHandler<HTMLAudioElement> = (e) => {
        e.currentTarget.volume = volume
        setIsReady(true)
    }

    const handleTimeUpdate: ReactEventHandler<HTMLAudioElement> = (e) => {
        setCurrentProgress(e.currentTarget.currentTime)
        handleBufferProgress(e)
    }

    const handleOnVolumeChange: ReactEventHandler<HTMLAudioElement> = (e) => {
        setVolume(e.currentTarget.volume)
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

    const handleProgressBarChange: ReactEventHandler<HTMLInputElement> = (
        e
    ) => {
        if (!audioElement.current) return

        audioElement.current.currentTime = e.currentTarget.valueAsNumber
        setCurrentProgress(e.currentTarget.valueAsNumber)
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
                    const bufferedLength = audio.buffered.end(
                        audio.buffered.length - 1 - i
                    )
                    setBuffered(bufferedLength)
                    break
                }
            }
        }
    }

    // effects

    useEffect(() => {
        audioElement!.current!.src = currentTrack!.src
        setIsReady(true)
    }, [audioElement, currentTrack, trackIndex])

    return (
        <MainContainerDivElement {...props}>
            {
                <audio
                    ref={audioElement}
                    preload="metadata"
                    onDurationChange={handleDurationChange}
                    onCanPlay={handleCanPlay}
                    onPlaying={handleOnPlaying}
                    onPause={handleOnPause}
                    onEnded={onNext}
                    onTimeUpdate={handleTimeUpdate}
                    onProgress={handleBufferProgress}
                    onVolumeChange={(e) => handleOnVolumeChange(e)}
                >
                    <source src={currentTrack!.src} type="audio/mpeg" />
                </audio>
            }

            {isReady ? (
                <Container>
                    <TextDivElement>
                        <p
                            style={{
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: '0.25rem 0.5rem',
                                borderRadius: '0.5rem',
                            }}
                        >
                            {currentTrack?.title ?? 'Select a track'}
                        </p>
                        <p
                            style={{
                                fontSize: '0.8em',
                            }}
                        >
                            {currentTrack?.author && (
                                <span>
                                    by{' '}
                                    <a
                                        href={currentTrack.author.url}
                                        rel="noreferrer"
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {currentTrack.author.name}
                                    </a>
                                </span>
                            )}
                        </p>
                    </TextDivElement>

                    <PlayerDivElement>
                        <ButtonsDivContainer>
                            {/* 
                    PREVIOUS BUTTON
                */}
                            <Button
                                aria-label="Previous"
                                disabled={trackIndex === 0}
                                onClick={onPrevious}
                            >
                                <CONFIG.icons.backward size={20} />
                            </Button>
                            {/**
                             * PLAY/PAUSE BUTTON
                             */}
                            <Button
                                disabled={!isReady}
                                onClick={togglePlayPause}
                            >
                                {isPlaying ? (
                                    <CONFIG.icons.pause size={20} />
                                ) : (
                                    <CONFIG.icons.play size={20} />
                                )}
                            </Button>
                            {/* 
                    NEXT BUTTON
                */}
                            <Button
                                aria-label="Next"
                                disabled={trackIndex === trackCount - 1}
                                onClick={onNext}
                            >
                                <CONFIG.icons.forward size={20} />
                            </Button>
                        </ButtonsDivContainer>

                        <BottomDiv>
                            <BottomVolumeDiv>
                                <VolumeInput
                                    volume={volume}
                                    volumeChange={handleVolumeChange}
                                />
                                <Button
                                    onClick={handleMuteUnmute}
                                    aria-label={
                                        volume === 0 ? 'Unmute' : 'Mute'
                                    }
                                >
                                    {volume === 0 ? (
                                        <CONFIG.icons.volumeOff size={20} />
                                    ) : (
                                        <CONFIG.icons.volumeUp size={20} />
                                    )}
                                </Button>
                            </BottomVolumeDiv>
                            <ProgressTimeDiv>
                                {buffered ? (
                                    <ProgressBar
                                        duration={duration}
                                        currentProgress={currentProgress}
                                        buffered={buffered}
                                        onChange={handleProgressBarChange}
                                    />
                                ) : null}
                                <TimeSpan>
                                    {/* {`${elapsedDisplay} / ${durationDisplay}`} */}
                                    <span>{elapsedDisplay}</span>
                                    <span>/</span>
                                    <span>{durationDisplay}</span>
                                </TimeSpan>
                            </ProgressTimeDiv>
                        </BottomDiv>
                    </PlayerDivElement>
                </Container>
            ) : (
                <Loading />
            )}
        </MainContainerDivElement>
    )
}
