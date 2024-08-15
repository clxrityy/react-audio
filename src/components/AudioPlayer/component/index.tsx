import { ComponentPropsWithRef, ElementRef, ReactEventHandler, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CONFIG from "../../../config";
import { Loading, TimeSpan } from "../../../styles/elements";
import { Track } from "../../../types";
import formatDurationDisplay from "../../../utils/formatDuration";
import Button from "../../Button";
import ProgressBar from "../elements/Progress";
import TrackInfo from "../elements/TrackInfo";
import Volume from "../elements/Volume";


interface AudioPlayerProps extends ComponentPropsWithRef<"div"> {
    track: Track;
}

const AudioPlayerDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    padding: 0.5rem;
    position: relative;
    border-radius: 0.5rem;
    background-color: transparent;
    backdrop-filter: blur(10px);
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    padding: 0.25rem;
    align-items: center;
    justify-items: center;
    position: relative;
    width: 100%;
    max-width: 300px;

    @media only screen and (max-width: 600px) {
        gap: 0.5rem;
        flex-direction: column;
    }
`;

const PlayerDivElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
`;

const PlayerButtonAndVolume = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;
`;


export default function AudioPlayer({ track, ...props }: AudioPlayerProps) {

    // states
    const [duration, setDuration] = useState<number>(0);
    const [isReady, setIsReady] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0.2);
    const [currentProgress, setCurrentProgress] = useState<number>(0);
    const [buffered, setBuffered] = useState<number>(0);

    const audioElement = useRef<ElementRef<"audio">>(null);

    const durationDisplay = formatDurationDisplay(duration);
    const elapsedDisplay = formatDurationDisplay(currentProgress);


    // handlers

    const handleVolumeChange = (value: number) => {
        if (!audioElement.current) return;
        audioElement.current.volume = value;
        setVolume(value);
    }

    const handleMuteUnmute = () => {
        if (!audioElement.current) return;

        if (audioElement.current.volume !== 0) {
            audioElement.current.volume = 0;
        } else {
            audioElement.current.volume = 1;
        }
    }

    const togglePlayPause = () => {

        if (!audioElement.current) return;

        if (isPlaying) {
            audioElement.current.pause();
            setIsPlaying(false);
        } else {
            audioElement.current.play();
            setIsPlaying(true);
        }
    }

    const handleCanPlay: ReactEventHandler<HTMLAudioElement> = (e) => {
        e.currentTarget.volume = volume;
        setIsReady(true);
    }

    const handleBufferProgress: ReactEventHandler<HTMLAudioElement> = (e) => {
        const audio = e.currentTarget;
        const dur = audio.duration;

        if (dur > 0) {
            for (let i = 0; i < audio.buffered.length; i++) {
                if (audio.buffered.start(audio.buffered.length - 1 - i) < audio.currentTime) {
                    setBuffered(audio.buffered.end(audio.buffered.length - 1 - i));
                    break;
                }
            }
        }
    }

    const handleTimeUpdate: ReactEventHandler<HTMLAudioElement> = (e) => {
        setCurrentProgress(e.currentTarget.currentTime);
        handleBufferProgress(e);
    }

    const handleOnVolumeChange: ReactEventHandler<HTMLAudioElement> = (e) => {
        setVolume(e.currentTarget.volume)
    }

    const handleOnPlaying: ReactEventHandler<HTMLAudioElement> = () => {
        setIsPlaying(true);
    }

    const handleOnPause: ReactEventHandler<HTMLAudioElement> = () => {
        setIsPlaying(false);
    }

    const handleDurationChange: ReactEventHandler<HTMLAudioElement> = (e) => {
        setDuration(e.currentTarget.duration);
    }


    // effects
    useEffect(() => {
        audioElement!.current!.src = track.src;
        setIsReady(true);
    }, [track.src, audioElement, isReady]);


    return (
        <AudioPlayerDiv {...props}>
            <audio
                ref={audioElement}
                onCanPlay={handleCanPlay}
                onTimeUpdate={handleTimeUpdate}
                onVolumeChange={handleOnVolumeChange}
                onPlaying={handleOnPlaying}
                onPause={handleOnPause}
                onDurationChange={handleDurationChange}
            >
                <source src={track.src} type="audio/mpeg" />
            </audio>
            {isReady ?
                <Container>
                <TrackInfo track={track} />
                <PlayerDivElement>
                    <PlayerButtonAndVolume>
                        <Button disabled={!isReady} onClick={togglePlayPause}>
                            {isPlaying ? <CONFIG.icons.pause /> : <CONFIG.icons.play />}
                        </Button>
                        <Volume handleMute={handleMuteUnmute} volume={volume} volumeChange={handleVolumeChange} />
                    </PlayerButtonAndVolume>
                    <TimeSpan>
                        <span>
                            {elapsedDisplay}
                        </span>
                        <span>
                            /
                        </span>
                        <span>
                            {durationDisplay}
                        </span>
                    </TimeSpan>
                    {
                        buffered ? <ProgressBar duration={duration} currentProgress={currentProgress} buffered={buffered} /> : null
                    }
                </PlayerDivElement>

            </Container> : <Loading />}
        </AudioPlayerDiv>
    );
}