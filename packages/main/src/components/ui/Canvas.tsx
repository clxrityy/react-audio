import { ComponentProps, useEffect, useRef } from "react";
import { resizeElement, draw } from "../../util";

export interface CanvasProps extends ComponentProps<"canvas"> {
  analyser: AnalyserNode;
  bufferLength: number;
  dataArray: Uint8Array;
  size?: number;
  color?: string;
}

export function Canvas({
  analyser,
  bufferLength,
  dataArray,
  size,
  color,
  ...props
}: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function resize() {
    resizeElement<HTMLCanvasElement>(canvasRef.current);
  }

  useEffect(() => {
    draw(analyser, bufferLength, dataArray, canvasRef, color || "white");

    if (!size) {
      window.addEventListener("resize", resize);
    }

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [analyser, bufferLength, dataArray, size, color]);

  return (
    <canvas
      ref={canvasRef}
      width={size || 400}
      height={size || 400}
      style={{
        color: color,
        zIndex: 0,
        ...props.style,
      }}
      {...props}
    />
  );
}
