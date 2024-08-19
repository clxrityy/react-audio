import { ComponentPropsWithRef, ElementRef, RefObject, useEffect, useRef, useState } from "react";
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
    const sourceNode = useRef<MediaElementAudioSourceNode | null>();

    const audioAnalyzer = () => {
        if (!audioElement.current) {
            return;
        }
        if (!audioCtx) {
            setAudioCtx(new window.AudioContext());
        } else {
            if (sourceNode.current) {
                return;
            } else {
                const analyzer = audioCtx.createAnalyser();
                analyzer.fftSize = 2048;

                const bufferLengthNumber = analyzer.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLengthNumber);

                sourceNode.current = audioCtx.createMediaElementSource(audioElement.current);

                sourceNode.current.connect(analyzer);
                sourceNode.current.connect(audioCtx.destination);
                analyzer.connect(audioCtx.destination);

                sourceNode.current.addEventListener(("ended"), () => {
                    sourceNode.current?.disconnect();
                    analyzer.disconnect();
                });

                setAnalyzerData({ analyzer, bufferLength: bufferLengthNumber, dataArray });
            }
        }
    }

    useEffect(() => {
        if (audioElement.current) {
            audioElement.current.addEventListener(("play"), audioAnalyzer);

            if (audioElement.current.played) {
                audioAnalyzer();
            }
        }

        return () => {
            audioElement.current?.removeEventListener("play", audioAnalyzer);
        }

    }, [audioCtx, audioElement]);

    return (
        <div {...props}>
            <Player audioElement={audioElement} track={track} />
            {analyzerData && <Canvas size={size} analyzerdData={analyzerData} color={color ? color : "#ff0000"} />}
        </div>
    );

}