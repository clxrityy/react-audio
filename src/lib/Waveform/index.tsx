import { ComponentProps, RefObject, useEffect, useRef, useState } from 'react'
import {
    // AnalyserData,
    FFTSize,
    Track,
} from '../types'
import { cn } from '../../util/cn'
import { Player } from '../Player'
import { Canvas } from '../../components/ui/Canvas'
import { useAudioAnalyzer } from '../../hooks/useAudioAnalyser'
import { COLORS } from '../../config'

export interface WaveformProps extends ComponentProps<'div'> {
    track: Track
    size?: number
    fftSize?: FFTSize
    autoplay?: boolean
    showTrackInfo?: boolean
    color?: string
    showVolume?: boolean
    showProgress?: boolean
}

export function Waveform({
    track,
    size = 500,
    fftSize = 4096,
    autoplay = false,
    showTrackInfo = false,
    showVolume = false,
    showProgress = true,
    color = COLORS.primary,
    ...props
}: WaveformProps) {
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
    const [analyserData, setAnalyserData] = useState<AnalyserNode | null>(null)

    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = track.src
        }
    }, [track.src])

    const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null)

    // ✅ Initialize AudioContext & Analyser
    const initializeAudio = () => {
        if (!audioRef.current) {
            console.warn('🚨 Audio ref is not ready yet.')
            return
        }

        try {
            // Force a new AudioContext if needed
            const ctx = audioContext ?? new AudioContext()
            if (!audioContext) {
                setAudioContext(ctx)
            }

            if (!ctx) {
                throw new Error('AudioContext is null')
            }

            if (ctx.state === 'suspended') {
                ctx.resume()
            }

            // Ensure only one source node is created
            if (!sourceNodeRef.current) {
                sourceNodeRef.current = ctx.createMediaElementSource(
                    audioRef.current
                )
            }
            const analyser = useAudioAnalyzer(
                audioRef.current,
                ctx,
                sourceNodeRef,
                fftSize
            )

            if (analyser) {
                setAnalyserData(analyser.analyser)
            }
        } catch (error) {
            console.error('❌ Failed to initialize AudioContext:', error)
        }
    }

    // ✅ Ensure audio ref is set properly
    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(track.src)
            audioRef.current.load()
        }
    }, [track.src])

    // ✅ Attach AudioContext on first user interaction
    useEffect(() => {
        const enableAudio = () => {
            if (!audioContext) {
                initializeAudio()
            } else if (audioContext.state === 'suspended') {
                audioContext.resume()
            }
        }

        window.addEventListener('click', enableAudio)

        return () => {
            window.removeEventListener('click', enableAudio)
            audioContext?.close()
        }
    }, [audioContext])

    // // ✅ Debugging logs
    // useEffect(() => {
    //     console.log('🔊 Track source:', track.src)
    //     console.log('🎵 Audio ref:', audioRef.current)
    //     console.log('📊 Analyser data:', analyserData)
    // }, [track.src, analyserData])

    return (
        <div
            {...props}
            className={cn(
                'flex gap-2 items-center justify-center w-full max-w-[400px] relative rounded-md bg-transparent',
                props.className
            )}
        >
            <div className="relative w-full h-[100px]">
                {analyserData && (
                    <Canvas
                        analyserData={{
                            analyser: analyserData,
                            bufferLength: analyserData.frequencyBinCount,
                            dataArray: new Uint8Array(
                                analyserData.frequencyBinCount
                            ),
                        }}
                        color={color}
                        width={size}
                        height={size}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0.75,
                            pointerEvents: 'none',
                            zIndex: 0,
                        }}
                    />
                )}
                <Player
                    track={track}
                    audioRef={audioRef as RefObject<HTMLAudioElement>}
                    autoplay={autoplay}
                    showTrackInfo={showTrackInfo}
                    showProgress={showProgress}
                    showVolume={showVolume}
                    size={size}
                />
            </div>
        </div>
    )
}
