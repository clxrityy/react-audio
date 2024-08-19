import { ComponentPropsWithRef, ElementRef, useEffect, useRef } from "react";
import { AnalyzerData } from "../../../../types";
import animateBars from "../../../../utils/animateBars";

interface CanvasProps extends ComponentPropsWithRef<"canvas"> {
    analyzerdData: AnalyzerData;
    color: string;
    size?: {
        width: number;
        height: number;
    };
}


export default function Canvas({ analyzerdData, color, size, ...props }: CanvasProps) {
    const { analyzer, bufferLength, dataArray } = analyzerdData;

    const canvasRef = useRef<ElementRef<"canvas">>(null);

    const draw = (analyzerNode: AnalyserNode, bufferLengthCount: number, dataArrayDigits: Uint8Array) => {
        const canvas = canvasRef.current;
        if (!canvas || !analyzerNode) return;
        const canvasCtx = canvas.getContext("2d");

        const animate = () => {
            requestAnimationFrame(animate);
            canvas.width = canvas.width;
            animateBars({ analyzer: analyzerNode, canvas, canvasCtx: canvasCtx!, dataArray: dataArrayDigits, bufferLength: bufferLengthCount, color: color });
        }

        animate();
    }

    useEffect(() => {
        draw(analyzer, bufferLength, dataArray);
    }, [dataArray, analyzer, bufferLength, color]);



    return (
        <canvas
            ref={canvasRef}
            width={size?.width || window.innerWidth}
            height={size?.height || window.innerHeight}
            style={{
                top: 0,
                left: 0,
                position: "absolute",
                zIndex: -10,
                ...props.style
            }}
            {...props}
        />
    );
}