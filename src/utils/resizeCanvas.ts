export default function resizeCanvas(canvas: HTMLCanvasElement | null) {
    if (canvas) {
        canvas.width = canvas.clientWidth * window.devicePixelRatio;
        canvas.height = canvas.clientHeight * window.devicePixelRatio;
    }
}