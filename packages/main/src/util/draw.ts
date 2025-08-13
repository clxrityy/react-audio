import { RefObject } from "react";
import { animateBars } from "./animate";

export function draw(
  analyser: AnalyserNode,
  bufferLength: number,
  dataArray: Uint8Array,
  canvasRef: RefObject<HTMLCanvasElement | null>,
  color: string,
): () => void {
  const canvas = canvasRef.current;
  if (!canvas || !analyser) return () => { };

  const canvasContext = canvas.getContext("2d");

  let rafId = 0;

  const animate = () => {
    rafId = requestAnimationFrame(animate);
    if (canvasContext) {
      animateBars({
        analyser,
        canvas,
        canvasContext,
        dataArray: dataArray as unknown as Uint8Array<ArrayBuffer>,
        bufferLength,
        color,
      });
    }
  };

  animate();

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
  };
}
