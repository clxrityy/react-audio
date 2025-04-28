import { ComponentProps, useEffect, useRef, useState } from 'react'
import { cn } from '../../util/cn'

export interface OscillatorProps extends ComponentProps<'div'> {
    type?: OscillatorType
    frequency?: number
    gain?: number
    isPlaying: boolean
    onFrequencyChange?: (frequency: number) => void
    onGainChange?: (gain: number) => void
}

export function Oscillator({
    type = 'sine',
    frequency = 440,
    gain = 0.5,
    isPlaying = false,
    onFrequencyChange,
    onGainChange,
    ...props
}: OscillatorProps) {
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null)

    const audioContextRef = useRef<AudioContext | null>(null)
    const oscillatorRef = useRef<OscillatorNode | null>(null)
    const gainNodeRef = useRef<GainNode | null>(null)

    const [localFrequency, setLocalFrequency] = useState<number>(frequency)
    const [localGain, setLocalGain] = useState<number>(gain)
    const [contextStarted, setContextStarted] = useState<boolean>(false)

    const toggleAudioContext = () => {
        if (!audioContextRef.current || !contextStarted) {
            const ctx = audioContext ?? new AudioContext()
            if (!audioContext) {
                setAudioContext(ctx)
            }
            audioContextRef.current = audioContext
            setContextStarted(true)
        } else {
            audioContextRef.current.close()
            audioContextRef.current = null
            setContextStarted(false)
        }
    }

    useEffect(() => {
        toggleAudioContext()

        if (isPlaying && audioContextRef.current) {
            if (!oscillatorRef.current) {
                const audioContext = audioContextRef.current
                const oscillator = audioContext.createOscillator()
                const gainNode = audioContext.createGain()

                oscillator.type = type
                oscillator.frequency.setValueAtTime(
                    localFrequency,
                    audioContext.currentTime
                )
                gainNode.gain.setValueAtTime(
                    localGain,
                    audioContext.currentTime
                )

                oscillator.connect(gainNode)
                gainNode.connect(audioContext.destination)

                oscillator.start()
                oscillatorRef.current = oscillator
                gainNodeRef.current = gainNode
            }
        } else {
            oscillatorRef.current?.stop()
            oscillatorRef.current?.disconnect()
            gainNodeRef.current?.disconnect()
            oscillatorRef.current = null
            gainNodeRef.current = null
        }

        return () => {
            oscillatorRef.current?.stop()
            oscillatorRef.current?.disconnect()
            gainNodeRef.current?.disconnect()
            oscillatorRef.current = null
            gainNodeRef.current = null
        }
    }, [isPlaying, type, localFrequency, localGain])

    useEffect(() => {
        const handleUserInteraction = () => {
            if (
                audioContextRef.current &&
                audioContextRef.current.state === 'suspended'
            ) {
                audioContextRef.current.resume()
            }
        }

        window.addEventListener('load', handleUserInteraction)

        return () => {
            window.removeEventListener('load', handleUserInteraction)
        }
    }, [])

    return (
        <div
            {...props}
            className={cn('flex flex-col gap-2 items-center', props.className)}
        >
            <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                    <span>
                        Frequency:{' '}
                        <span className="font-mono">{localFrequency} Hz</span>
                    </span>
                    <input
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                        type="range"
                        min={20}
                        max={2000}
                        value={localFrequency}
                        onChange={(e) => {
                            const newFreq = Number(e.target.value)
                            setLocalFrequency(newFreq)
                            onFrequencyChange?.(newFreq)
                            if (oscillatorRef.current) {
                                oscillatorRef.current.frequency.setValueAtTime(
                                    newFreq,
                                    audioContextRef.current!.currentTime
                                )
                            }
                        }}
                    />
                </label>
                <label className="flex items-center gap-2">
                    <span>
                        Gain: <span className="font-mono">{localGain}</span>
                    </span>
                    <input
                        type="range"
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                        min={0}
                        max={1}
                        step={0.01}
                        value={localGain}
                        onChange={(e) => {
                            const newGain = Number(e.target.value)
                            setLocalGain(newGain)
                            onGainChange?.(newGain)
                            if (gainNodeRef.current) {
                                gainNodeRef.current.gain.setValueAtTime(
                                    newGain,
                                    audioContextRef.current!.currentTime
                                )
                            }
                        }}
                    />
                </label>
            </div>
        </div>
    )
}
