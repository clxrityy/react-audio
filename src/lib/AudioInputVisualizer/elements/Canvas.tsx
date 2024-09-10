import { ComponentProps, useEffect, useRef } from "react";
import styled from "styled-components";
import resizeCanvas from "../../../utils/resizeCanvas";

interface CanvasProps extends ComponentProps<"canvas"> {
    analyzernode: AnalyserNode;
};

const CanvasElement = styled.canvas<CanvasProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: transparent;
`;



export default function Canvas({ analyzernode, ...props }: CanvasProps) {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    function drawVisualizer() {
        requestAnimationFrame(drawVisualizer);

        const bufferLength = analyzernode.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength!);
        analyzernode.getByteFrequencyData(dataArray);

        if (canvasRef.current) {
            const width = canvasRef.current.width!;
            const height = canvasRef.current.height!;
            const barWidth = Math.max(1, width / (bufferLength));

            const canvasCtx = canvasRef.current.getContext('2d')!;
            canvasCtx.clearRect(0, 0, width, height);

            dataArray.forEach((item, i) => {
                const y = item / 255 * height / 2;
                const x = barWidth * i;
                const color = `hsl(${360 * i / bufferLength}, 100%, 50%)`
                canvasCtx.fillStyle = color;

                canvasCtx.fillRect(x, height - y, barWidth, y);
            });
        } else {
            console.log('canvasRef.current is null');
        }
    }

    function resize() {
        resizeCanvas(canvasRef.current);
    }

    useEffect(() => {
        drawVisualizer();
        resize();
    }, [canvasRef]);

    return <CanvasElement ref={canvasRef} analyzernode={analyzernode} {...props} />;
}