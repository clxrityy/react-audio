import { ComponentPropsWithRef, ElementRef, useRef, useState } from "react";
import { Track } from "../../types";
import Canvas from "./elements/Canvas";

interface WaveformProps extends ComponentPropsWithRef<"div"> {
    track: Track;
    color?: string;
}

export default function Waveform({ track, color, ...props }: WaveformProps) {

    // analyzer data
    const [audioAnalyzerNode, setAudioAnalyzerNode] = useState<AnalyserNode>();
    const [bufferLength, setBufferLength] = useState<number>();
    const [dataArray, setDataArray] = useState<Uint8Array>();


    const audioElement = useRef<ElementRef<"audio">>(null);

    const audioCtx = new window.AudioContext();

    const audioAnalyzer = () => {
        if (!audioElement.current) return;

        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        setAudioAnalyzerNode(analyser);

        const bufferLengthNumber = analyser.frequencyBinCount;
        setBufferLength(bufferLengthNumber);

        const dataArrayDigits = new Uint8Array(bufferLengthNumber);
        setDataArray(dataArrayDigits);

        const source = audioCtx.createMediaElementSource(audioElement.current);

        source.connect(analyser);
        audioAnalyzerNode?.connect(audioCtx.destination);

        source.addEventListener(("ended"), () => {
            source.disconnect();
        })
    }


    return (
        <div {...props}>
            <audio
                ref={audioElement}
                controls
                onPlay={() => audioAnalyzer()}
            >
                <source src={track.src} type="audio/mpeg" />
            </audio>
            {audioAnalyzerNode && bufferLength && dataArray && <Canvas analyzerdData={{ analyzer: audioAnalyzerNode, bufferLength: bufferLength, dataArray: dataArray }} color={color ? color : "#ff0000"} />}
        </div>
    )

}