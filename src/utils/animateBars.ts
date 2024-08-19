interface AnimateBarsParams {
    analyzer: AnalyserNode;
    canvas: HTMLCanvasElement;
    canvasCtx: CanvasRenderingContext2D;
    dataArray: Uint8Array;
    bufferLength: number;
    color: string;
}


export default function animateBars({ analyzer, canvas, canvasCtx, dataArray, bufferLength, color }: AnimateBarsParams) {
    analyzer.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = color;

    const HEIGHT = canvas.height;

    const barWidth = Math.ceil(canvas.width / bufferLength) * 2.5;

    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i]! / 255) * HEIGHT;

        const maximum = 10;
        const minimum = -10;

        const r = 242 + Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        const g = 104 + Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        const b = 65 + Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

        canvasCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;

        canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }
}