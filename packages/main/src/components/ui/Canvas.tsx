import { ComponentProps, useEffect, useMemo, useRef } from "react";
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
  const resize = useMemo(
    () => () => resizeElement<HTMLCanvasElement>(canvasRef.current),
    [],
  );

  useEffect(() => {
    const cleanup = draw(
      analyser,
      bufferLength,
      dataArray,
      canvasRef,
      color || "white",
    );

    if (!size) {
      window.addEventListener("resize", resize);
      resize();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cleanup?.();
    };
  }, [analyser, bufferLength, dataArray, size, color, resize]);

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
