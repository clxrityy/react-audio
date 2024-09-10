import { AnalyzerData, FFTSize } from "../types";

export function audioAnalyzer(current: HTMLAudioElement, context: AudioContext, source: React.MutableRefObject<MediaElementAudioSourceNode | undefined | null>, fftsize?: FFTSize): AnalyzerData | undefined {
    if (!current || !context) {
        return
    }
    if (source.current) {
        return
    }
    const analyzer = context.createAnalyser();
    analyzer.fftSize = fftsize || 2048;

    const bufferLengthNumber = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLengthNumber);

    source.current = context.createMediaElementSource(current);

    source.current.connect(analyzer);
    source.current.connect(context.destination);
    analyzer.connect(context.destination);

    source.current.addEventListener('ended', () => {
        source.current?.disconnect();
        analyzer.disconnect();
    });

    return {
        analyzer,
        bufferLength: bufferLengthNumber,
        dataArray,
    } as AnalyzerData;
}