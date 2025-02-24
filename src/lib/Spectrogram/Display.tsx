import { useEffect, useRef, ComponentProps, useState, RefObject } from 'react'
import { FFTSize } from '../types'
import { COLORS } from '../../config'

export interface SpectrogramDisplayProps extends ComponentProps<'canvas'> {
    audioRef: RefObject<HTMLAudioElement>
    fftSize?: FFTSize
    width?: number | string
    height?: number | string
    minDecibels?: number
    maxDecibels?: number
    colorMap?: string[]
    smoothingTimeConstant?: number
    realTime?: boolean
    logarithmicScale?: boolean
    onFrameUpdate?: (dataArray: Uint8Array) => void
    fillStyle?: string
    loop?: boolean
}

export function SpectrogramDisplay({
    audioRef,
    width = '100%',
    height = '25%',
    fftSize = 1024,
    minDecibels = -100,
    maxDecibels = -25,
    colorMap = ['#111', '#ff0000', '#ffff00', '#ffffff'],
    smoothingTimeConstant = 0.8,
    realTime = true,
    logarithmicScale = true,
    onFrameUpdate,
    fillStyle,
    loop,
    ...props
}: SpectrogramDisplayProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const audioContextRef = useRef<AudioContext | null>(null)
    const analyserRef = useRef<AnalyserNode | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [clicked, setClicked] = useState<boolean>(false)

    const startAudio = () => {
        if (isPlaying) {
            audioRef.current?.pause()
            setIsPlaying(false)
            return
        }

        if (!audioRef.current) return

        if (!audioContextRef.current) {
            const audioContext = new (window.AudioContext ||
                (window as any).webkitAudioContext)()
            const analyser = audioContext.createAnalyser()
            audioContextRef.current = audioContext
            analyserRef.current = analyser

            analyser.fftSize = fftSize
            analyser.minDecibels = minDecibels
            analyser.maxDecibels = maxDecibels
            analyser.smoothingTimeConstant = smoothingTimeConstant

            const source = audioContext.createMediaElementSource(
                audioRef.current
            )
            source.connect(analyser)
            analyser.connect(audioContext.destination)
        }

        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume()
        }

        if (audioRef.current.paused) {
            audioRef.current.play()
        }

        if (loop) {
            audioRef.current.loop = true
        }

        setIsPlaying((prev) => !prev)
    }

    useEffect(() => {
        if (!canvasRef.current || !audioRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = 800
        canvas.height = 400

        const interpolateColor = (
            color1: string,
            color2: string,
            factor: number
        ) => {
            const result = color1
                .slice(1)
                .match(/.{2}/g)!
                .map((hex, i) => {
                    const color1Component = parseInt(hex, 16)
                    const color2Component = parseInt(
                        color2.slice(1).match(/.{2}/g)![i],
                        16
                    )
                    const interpolatedComponent = Math.round(
                        color1Component +
                            factor * (color2Component - color1Component)
                    )
                    return interpolatedComponent.toString(16).padStart(2, '0')
                })
            return `#${result.join('')}`
        }

        const getColor = (value: number) => {
            const percent = value / 255
            const scaledValue = percent * (colorMap.length - 1)
            const index = Math.floor(scaledValue)
            const factor = scaledValue - index
            const color1 = colorMap[index]
            const color2 = colorMap[index + 1] || color1
            return interpolateColor(color1, color2, factor)
        }

        const drawSpectrogram = () => {
            if (!canvas || !ctx || !analyserRef.current) return
            const bufferLength = analyserRef.current.frequencyBinCount
            const dataArray = new Uint8Array(bufferLength)

            analyserRef.current.getByteFrequencyData(dataArray)

            ctx.fillStyle = fillStyle || 'rgba(0, 0, 0, 0.5)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < bufferLength; i++) {
                const value = dataArray[i]
                const height = (value / 255) * canvas.height
                const offset = canvas.height - height
                const barWidth = canvas.width / bufferLength

                ctx.fillStyle = getColor(value)
                ctx.fillRect(i * barWidth, offset, barWidth, height)
            }

            requestAnimationFrame(drawSpectrogram)
            onFrameUpdate?.(dataArray)
        }

        if (isPlaying) {
            drawSpectrogram();
        }

    }, [colorMap, fillStyle, isPlaying, onFrameUpdate])

    return (
        <canvas
            onClick={() => {
                startAudio()
                setClicked(true)
            }}
            className={`border border-zinc-800/65 dark:border-zinc-500/65 rounded-md cursor-pointer backdrop:invert-50 ${!clicked && 'bg-zinc-700/50 animate-pulse hover:border-2 transition-all hover:bg-zinc-700/75 hover:animate-none'}`}
            ref={canvasRef}
            style={{
                width,
                height,
            }}
            {...props}
        />
    )
}
