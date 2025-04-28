import { ComponentProps, useRef } from 'react'
import { FFTSize, Track } from '../types'
import { cn } from '../../util/cn'
import { SpectrogramDisplay } from './Display'
import { AudioSource } from '../../components/ui/AudioSource'

export interface SpectrogramProps extends ComponentProps<'div'> {
  track: Track
  fftSize?: FFTSize | undefined
  width?: number | string | undefined
  height?: number | string | undefined
  minDecibels?: number | undefined
  maxDecibels?: number | undefined
  colorMap?: string[] | undefined
  smoothingTimeConstant?: number | undefined
  onFrameUpdate?: ((dataArray: Uint8Array) => void) | undefined
  loop?: boolean | undefined
  fillStyle?: string | undefined
}

export function Spectrogram({
  track,
  fftSize,
  width,
  height,
  minDecibels,
  maxDecibels,
  colorMap,
  smoothingTimeConstant,
  onFrameUpdate,
  loop,
  fillStyle,
  ...props
}: SpectrogramProps) {
  const audioRef = useRef<HTMLAudioElement>(new Audio())

  return (
    <div {...props} className={cn('', props.className)}>
      <audio ref={audioRef}>
        <AudioSource src={track.src} />
      </audio>
      {audioRef.current && (
        <SpectrogramDisplay
          audioRef={audioRef}
          fftSize={fftSize}
          width={width}
          height={height}
          minDecibels={minDecibels}
          maxDecibels={maxDecibels}
          colorMap={colorMap}
          smoothingTimeConstant={smoothingTimeConstant}
          onFrameUpdate={onFrameUpdate}
          loop={loop}
          fillStyle={fillStyle}
        />
      )}
    </div>
  )
}
