import { RefObject } from 'react'
import { animateBars } from './animate'

export function draw(
  analyser: AnalyserNode,
  bufferLength: number,
  dataArray: Uint8Array,
  canvasRef: RefObject<HTMLCanvasElement | null>,
  color: string
) {
  const canvas = canvasRef.current
  if (!canvas || !analyser) return

  const canvasContext = canvas.getContext('2d')

  const animate = () => {
    requestAnimationFrame(animate)
    canvas.width = canvas.width ?? canvas.clientWidth

    if (canvasContext) {
      animateBars({
        analyser,
        canvas,
        canvasContext,
        dataArray,
        bufferLength,
        color,
      })
    }
  }

  animate()
}
