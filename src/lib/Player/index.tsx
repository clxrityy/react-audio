import { AudioSource } from '../../components/ui/AudioSource'
import { Button } from '../../components/ui/Button'
import { Loading } from '../../components/ui/Loading'
import { Progress } from '../../components/ui/Progress'
import { TrackInfo } from '../../components/ui/TrackInfo'
import { VolumeSlider } from '../../components/ui/VolumeSlider'
import { COLORS, ICONS } from '../../config'
import { cn } from '../../util/cn'
import { Track } from '../types'
import {
  ComponentProps,
  ReactEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface PlayerProps extends ComponentProps<'div'> {
  track: Track
  size?: number
  autoplay?: boolean
  showTrackInfo?: boolean
  showNextPrevControls?: boolean
  showProgress?: boolean
  showVolume?: boolean
  audioRef?: React.RefObject<HTMLAudioElement> | undefined
  onNext?: (() => void) | undefined
  onPrev?: (() => void) | undefined
  color?: string
}

// function formatDurationDisplay(duration: number): string {
//   const min = Math.floor(duration / 60)
//   const sec = Math.floor(duration % 60)

//   const formatted = [min, sec].map((n) => (n < 10 ? '0' + n : n)).join(':') // mm:ss

//   return formatted
// }

export function Player({
  track,
  size = 200,
  autoplay = false,
  showTrackInfo = false,
  showNextPrevControls = false,
  showProgress = true,
  showVolume = true,
  audioRef,
  onNext,
  onPrev,
  color = COLORS.primary,
  ...props
}: PlayerProps) {
  const [canPlay, setCanPlay] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [volume, setVolume] = useState<number>(0.25)
  const [buffered, setBuffered] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [audioElement, setAudioElement] =
    useState<HTMLAudioElement | null>(null)

  // const durationDisplay = formatDurationDisplay(duration)
  // const elapsedTimeDisplay = formatDurationDisplay(currentTime)

  if (!audioRef) audioRef = useRef<HTMLAudioElement>(audioElement!)

  useEffect(() => {
    if (!audioElement) {
      setAudioElement(audioRef.current)
    } else {
      audioElement.addEventListener('canplaythrough', () => {
        setCanPlay(true)
      })
    }
  }, [])

  const play = useCallback(() => {
    if (!canPlay || !audioElement) return

    try {
      audioElement.play()
      setIsPlaying(true)
    } catch (e) {
      console.error(e)
      setIsPlaying(false)
    }
  }, [canPlay])

  const pause = useCallback(() => {
    if (!canPlay || !audioElement) return
    audioElement.pause()
    setIsPlaying(false)
  }, [canPlay])

  const handleVolumeChange: ReactEventHandler<HTMLAudioElement> =
    useCallback((e) => {
      if (!audioElement) return
      audioElement.volume = e.currentTarget.volume
      setVolume(e.currentTarget.volume)
    }, [])

  const handleMuteUnmute = useCallback(() => {
    if (!audioElement) return

    if (audioElement.volume !== 0) {
      audioElement.volume = 0
      setVolume(0)
    } else {
      audioElement.volume = 0.25
      setVolume(volume)
    }
  }, [audioElement, volume])

  const handleBufferProgress: ReactEventHandler<HTMLAudioElement> =
    useCallback((e) => {
      const audio = e.currentTarget
      const duration = audio.duration

      if (duration > 0) {
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
    }, [])

  const handleTimeUpdate: ReactEventHandler<HTMLAudioElement> =
    useCallback(
      (e) => {
        setCurrentTime(e.currentTarget.currentTime)
        handleBufferProgress(e)
      },
      [handleBufferProgress]
    )

  const handleDurationChange: ReactEventHandler<HTMLAudioElement> =
    useCallback((e) => {
      setDuration(e.currentTarget.duration)
    }, [])

  const handleCanPlay: ReactEventHandler<HTMLAudioElement> =
    useCallback((e) => {
      e.currentTarget.volume = volume
      setCanPlay(true)
    }, [])

  const { src } = track

  const handleOnProgressChange: ReactEventHandler<
    HTMLInputElement
  > = (e) => {
    const newTime = parseFloat(e.currentTarget.value)
    setCurrentTime(newTime)

    if (audioElement) {
      audioElement.currentTime = newTime // ⬅ Update audio playback time
    }
  }

  useEffect(() => {
    if (autoplay && canPlay && audioElement) {
      setIsPlaying(true)
    }
  }, [])

  useEffect(() => {
    if (!audioElement) return

    const updateProgress = () =>
      setCurrentTime(audioElement.currentTime)

    const updateBuffered = () => {
      if (audioElement.buffered.length > 0) {
        setBuffered(
          audioElement.buffered.end(audioElement.buffered.length - 1)
        )
      }
    }

    audioElement.addEventListener('timeupdate', updateProgress)
    audioElement.addEventListener('progress', updateBuffered)

    audioElement.addEventListener('loadedmetadata', () =>
      setDuration(audioElement.duration)
    )

    return () => {
      audioElement.removeEventListener('timeupdate', updateProgress)
      audioElement.removeEventListener('progress', updateBuffered)
    }
  }, [])

  return (
    <div
      {...props}
      className={cn(
        'flex flex-col items-center gap-4 relative',
        props.className
      )}>
      <div className="flex items-center gap-2">
        <audio
          ref={audioRef}
          onCanPlay={handleCanPlay}
          onTimeUpdate={handleTimeUpdate}
          onDurationChange={handleDurationChange}
          onVolumeChange={handleVolumeChange}
          onPause={pause}
          autoPlay={autoplay}
          preload="auto">
          <AudioSource src={src} />
        </audio>
        <div className="flex flex-col gap-2 items-center z-30">
          {showTrackInfo && <TrackInfo track={track} />}
          <div className="flex flex-col items-center gap-2">
            {canPlay ? (
              !isPlaying && !autoplay ? (
                <Button onClick={play}>
                  <ICONS.play />
                </Button>
              ) : autoplay && isPlaying ? (
                <Button onClick={pause}>
                  <ICONS.pause />
                </Button>
              ) : (
                <Button onClick={pause}>
                  <ICONS.pause />
                </Button>
              )
            ) : (
              <Loading />
            )}
            {showVolume && (
              <div className="flex items-center gap-2">
                <Button onClick={handleMuteUnmute}>
                  {volume === 0 ? (
                    <ICONS.volumeOff />
                  ) : volume < 0.5 ? (
                    <ICONS.volumeDown />
                  ) : (
                    <ICONS.volumeUp />
                  )}
                </Button>
                <VolumeSlider
                  size={size}
                  color={color}
                  volume={volume}
                  onVolumeChnge={(newVolume) => {
                    if (!audioElement) return
                    audioElement.volume = newVolume
                    setVolume(newVolume)
                  }}
                />
              </div>
            )}
            {showNextPrevControls && onNext && onPrev && (
              <div className="flex items-center gap-2">
                <Button onClick={onPrev}>
                  <ICONS.skipPrevious />
                </Button>
                <Button onClick={onNext}>
                  <ICONS.skipNext />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {showProgress && (
        <Progress
          color={color}
          duration={duration}
          current_progress={currentTime}
          buffered={buffered}
          onChange={handleOnProgressChange}
        />
      )}
    </div>
  )
}
