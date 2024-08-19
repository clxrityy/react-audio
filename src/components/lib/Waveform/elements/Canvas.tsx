import { ComponentPropsWithRef, ElementRef, useEffect, useRef } from "react";
import { AnalyzerData } from "../../../../types";
import animateBars from "../../../../utils/animateBars";
import styled from "styled-components";

interface CanvasProps extends ComponentPropsWithRef<"canvas"> {
    analyzerdData: AnalyzerData;
    color: string;
    size?: {
        width: number;
        height: number;
    };
}

const Container = styled.canvas<CanvasProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;


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
                position: "absolute",
                zIndex: -10,
                ...props.style
            }}
            {...props}
        />
    );
}