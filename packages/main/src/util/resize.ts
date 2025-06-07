export function resizeElement<T>(element: T | null) {
  if (element instanceof HTMLCanvasElement) {
    element.width = element.clientWidth * window.devicePixelRatio;
    element.height = element.clientHeight * window.devicePixelRatio;
  }
}
