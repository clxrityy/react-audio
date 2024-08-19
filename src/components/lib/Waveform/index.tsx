import { ComponentPropsWithRef, ElementRef, useRef, useState } from "react";
import { AnalyzerData, Track } from "../../../types";
import Canvas from "./elements/Canvas";
import Player from "./elements/Player";

interface WaveformProps extends ComponentPropsWithRef<"div"> {
    track: Track;
    color?: string;
    size?: {
        width: number;
        height: number;
    };
}

export default function Waveform({ track, color, size, ...props }: WaveformProps) {

    const [analyzerData, setAnalyzerData] = useState<AnalyzerData>();
    const [audioCtx, setAudioCtx] = useState<AudioContext>();
    const audioElement = useRef<ElementRef<"audio">>(null);

    const audioAnalyzer = () => {
        if (!audioElement.current) return;

        if (!audioCtx) {
            setAudioCtx(new window.AudioContext());
        } else {
            const analyser = audioCtx.createAnalyser();
            analyser.fftSize = 2048;
            const bufferLengthNumber = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLengthNumber);

            const source = audioCtx.createMediaElementSource(audioElement.current!);

            source.connect(analyser);
            source.connect(audioCtx.destination);
            analyser.connect(audioCtx.destination);

            source.addEventListener(("ended"), () => {
                source.disconnect();
                analyser.disconnect();
            });

            setAnalyzerData({ analyzer: analyser, bufferLength: bufferLengthNumber, dataArray: dataArray });
        }
    }

    return (
        <div {...props}>
            <Player audioElement={audioElement} track={track} whenPlayed={audioAnalyzer} />
            {analyzerData && <Canvas size={size} analyzerdData={analyzerData} color={color ? color : "#ff0000"} />}
        </div>
    );

}