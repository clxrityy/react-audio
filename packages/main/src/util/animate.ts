export function animateBars({
  analyser,
  canvas,
  canvasContext,
  dataArray,
  bufferLength,
  color,
}: {
  analyser: AnalyserNode;
  canvas: HTMLCanvasElement;
  canvasContext: CanvasRenderingContext2D;
  dataArray: Uint8Array;
  bufferLength: number;
  color: string;
}) {
  if (!canvasContext) {
    return;
  }

  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  analyser.getByteFrequencyData(dataArray);
  canvasContext.fillStyle = color;

  const HEIGHT = canvas.height;
  const WIDTH = canvas.width;

  const barWidth = Math.ceil(WIDTH / bufferLength) * 2.5;

  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const barHeight = ((dataArray[i] as number) / 255) * HEIGHT;
    canvasContext.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    x += barWidth + 1;
  }
}
