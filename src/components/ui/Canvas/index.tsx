import { ComponentPropsWithRef, ElementRef, useEffect, useRef } from 'react';
import { AnalyzerData } from '../../../types';
import animateBars from '../../../utils/animateBars';
import resizeCanvas from '../../../utils/resizeCanvas';

interface CanvasProps extends ComponentPropsWithRef<'canvas'> {
    analyzerdData: AnalyzerData;
    color: string
    size?: {
        width: number
        height: number
    }
}

export default function Canvas({
    analyzerdData,
    color,
    size,
    ...props
}: CanvasProps) {
    const { analyzer, bufferLength, dataArray } = analyzerdData;

    const canvasRef = useRef<ElementRef<'canvas'>>(null)

    const draw = (
        analyzerNode: AnalyserNode,
        bufferLengthCount: number,
        dataArrayDigits: Uint8Array
    ) => {
        const canvas = canvasRef.current
        if (!canvas || !analyzerNode) return
        const canvasCtx = canvas.getContext('2d')

        const animate = () => {
            requestAnimationFrame(animate)
            canvas.width = canvas.width
            animateBars({
                analyzer: analyzerNode,
                canvas,
                canvasCtx: canvasCtx!,
                dataArray: dataArrayDigits,
                bufferLength: bufferLengthCount,
                color: color,
            })
        }

        animate();
    }

    function resize() {
        resizeCanvas(canvasRef.current);
    }

    useEffect(() => {
        draw(analyzer, bufferLength, dataArray);
        if (!size) {
            window.addEventListener('resize', resize);
        }

        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [dataArray, analyzer, bufferLength, color]);

    return (
        <canvas
            ref={canvasRef}
            width={size?.width || 1000}
            height={size?.height || 1000}
            style={{
                position: 'absolute',
                color: color,
                ...props.style,
            }}
            {...props}
        />
    )
}
