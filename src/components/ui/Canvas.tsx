import { AnalyserData } from '../../lib/types'
import { ComponentPropsWithRef, useEffect, useRef } from 'react'

function resizeCanvas(canvas: HTMLCanvasElement | null) {
    if (canvas) {
        canvas.width = canvas.clientWidth * window.devicePixelRatio
        canvas.height = canvas.clientHeight * window.devicePixelRatio
    }
}

function animateBars({
    analyser,
    canvas,
    canvasContext,
    dataArray,
    bufferLength,
    color,
}: {
    analyser: AnalyserNode
    canvas: HTMLCanvasElement
    canvasContext: CanvasRenderingContext2D
    dataArray: Uint8Array
    bufferLength: number
    color: string
}) {
    if (!canvasContext) return
    // Clear the canvas
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)

    analyser.getByteFrequencyData(dataArray)

    canvasContext.fillStyle = color

    const HEIGHT = canvas.height
    const barWidth = Math.ceil(canvas.width / bufferLength) * 2.5

    let x = 0

    for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * HEIGHT

        canvasContext.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)
        x += barWidth + 1
    }
}

interface CanvasProps extends ComponentPropsWithRef<'canvas'> {
    analyserData: AnalyserData
    color: string
    size?: number
}

export function Canvas({ analyserData, color, size, ...props }: CanvasProps) {
    const { analyser, bufferLength, dataArray } = analyserData

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const draw = (
        analyserNode: AnalyserNode,
        bufferLengthCount: number,
        dataArrayDigits: Uint8Array
    ) => {
        const canvas = canvasRef.current
        if (!canvas || !analyserNode) return
        const canvasCtx = canvas.getContext('2d')

        const animate = () => {
            requestAnimationFrame(animate)
            canvas.width = canvas.width
            animateBars({
                analyser: analyserNode,
                canvas,
                canvasContext: canvasCtx!,
                dataArray: dataArrayDigits,
                bufferLength: bufferLengthCount,
                color: color,
            })
        }

        animate()
    }

    function resize() {
        resizeCanvas(canvasRef.current)
    }

    useEffect(() => {
        draw(analyser!, bufferLength, dataArray)
        if (!size) {
            window.addEventListener('resize', resize)
        }

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [dataArray, analyser, bufferLength, color])

    return (
        <canvas
            ref={canvasRef}
            width={size || 400}
            height={size || 400}
            style={{
                position: 'absolute',
                color: color,
                zIndex: 0,
                ...props.style,
            }}
            {...props}
        />
    )
}
