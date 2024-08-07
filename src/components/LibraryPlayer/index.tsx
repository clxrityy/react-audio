import { ComponentPropsWithRef, ElementRef, ReactElement, ReactEventHandler, useEffect, useRef, useState } from "react";
import { Track } from "../../types";
import { FaPlay, FaPause, FaVolumeOff, FaVolumeUp, FaForward, FaBackward } from "react-icons/fa";
import VolumeInput from "./VolumeInput";
import ProgressBar from "./ProgressBar";
import formatDurationDisplay from "../../utils/formatDuration";
import Button from "../Button";

interface AudioLibraryProps extends ComponentPropsWithRef<"div"> {
    currentTrack?: Track;
    trackIndex: number;
    trackCount: number;
    onNext: () => void;
    onPrevious: () => void;
}

export default function LibraryPlayer({ currentTrack, trackIndex, trackCount, onNext, onPrevious, ...props }: AudioLibraryProps): ReactElement<AudioLibraryProps, "div"> {

    // states
    const [duration, setDuration] = useState<number>(0);
    const [isReady, setIsReady] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0.2);
    const [currentProgress, setCurrentProgress] = useState<number>(0);
    const [buffered, setBuffered] = useState<number>(0);


    const audioElement = useRef<ElementRef<"audio">>(null);

    // values
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

        console.log("togglePlayPause", isPlaying); // debug
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

    const handleTimeUpdate: ReactEventHandler<HTMLAudioElement> = (e) => {
        setCurrentProgress(e.currentTarget.currentTime);
        handleBufferProgress(e);
    }

    const handleOnVolumeChange: ReactEventHandler<HTMLAudioElement> = (e) => {
        setVolume(e.currentTarget.volume)
    }

    const handleOnPlaying: ReactEventHandler<HTMLAudioElement> = (e) => {
        setIsPlaying(true);
    }

    const handleOnPause: ReactEventHandler<HTMLAudioElement> = (e) => {
        setIsPlaying(false);
    }

    const handleDurationChange: ReactEventHandler<HTMLAudioElement> = (e) => {
        setDuration(e.currentTarget.duration);
    }

    const handleProgressBarChange: ReactEventHandler<HTMLInputElement> = (e) => {
        if (!audioElement.current) return;

        audioElement.current.currentTime = e.currentTarget.valueAsNumber;
        setCurrentProgress(e.currentTarget.valueAsNumber);
    }

    const handleBufferProgress: ReactEventHandler<HTMLAudioElement> = (e) => {

        console.log("buffered", e.currentTarget.buffered); // debug

        const audio = e.currentTarget;
        const dur = audio.duration;

        if (dur > 0) {
            for (let i = 0; i < audio.buffered.length; i++) {
                if (audio.buffered.start(audio.buffered.length - 1 - i) < audio.currentTime) {
                    const bufferedLength = audio.buffered.end(
                        audio.buffered.length - 1 - i
                    );
                    setBuffered(bufferedLength);
                    break;
                }

            }
        }
    }




    return <div
        {...props}
        style={{
            position: "relative"
        }}>
        {
            <audio
                // @ts-ignore
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
                <source src={currentTrack && currentTrack.src} />
            </audio>

        }
        <div style={{
            textAlign: "center",
            marginBottom: "5px"
        }}>
            <p
                style={{
                    fontWeight: "bold"
                }}
            >
                {currentTrack?.title ?? "Select a track"}
            </p>
            <p style={{
                fontSize: "0.8em"
            }}>
                {currentTrack?.author && <span>
                    by <a href={currentTrack.author.url} target="_blank" rel="noreferrer">{currentTrack.author.name}</a>
                </span>}
            </p>
        </div>
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                marginTop: "10px"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifySelf: "center",
                    alignItems: "center",
                    gap: "5px"
                }}
            >
                <span style={{
                    fontSize: "0.8em"
                }}>
                    {elapsedDisplay} / {durationDisplay}
                </span>
                {/* 
                    PREVIOUS BUTTON
                */}
                <button
                    aria-label="Previous"
                    disabled={trackIndex === 0}
                    onClick={onPrevious}
                >
                    <FaBackward size={20} />
                </button>
                {/**
                 * PLAY/PAUSE BUTTON
                 */}
                <Button
                    disabled={!isReady}
                    onClick={togglePlayPause}
                >
                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                </Button>
                {/* 
                    NEXT BUTTON
                */}
                <button
                    aria-label="Next"
                    disabled={trackIndex === trackCount - 1}
                    onClick={onNext}
                >
                    <FaForward size={20} />
                </button>
            </div>
            <div
                style={{
                    display: "flex",
                    justifySelf: "end",
                    alignItems: "center",
                    gap: "5px"
                }}>
                <button
                    onClick={handleMuteUnmute}
                    aria-label={volume === 0 ? "Unmute" : "Mute"}
                >
                    {volume === 0 ? <FaVolumeOff size={20} /> : <FaVolumeUp size={20} />}
                </button>
                <VolumeInput volume={volume} volumeChange={handleVolumeChange} />
            </div>
            {buffered && currentProgress && <ProgressBar
                duration={duration}
                currentProgress={currentProgress}
                buffered={buffered}
                onChange={handleProgressBarChange}
            />}
        </div>
    </div>
}