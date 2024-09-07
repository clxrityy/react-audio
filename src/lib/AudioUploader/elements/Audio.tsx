import { ElementRef, useEffect, useRef, useState } from "react";
import { AnalyzerData } from "../../../types";
import Canvas from "../../../components/ui/Canvas";





export default function Audio({ src, color, canvasStyles, size }: { src: string, color?: string, canvasStyles?: React.CSSProperties, size?: { width: number, height: number } }) {
    const [analyzerData, setAnalyzerData] = useState<AnalyzerData>();
    const [audioCtx, setAudioCtx] = useState<AudioContext>();
    const [audioSrc, setAudioSrc] = useState<string>();
    const audioElement = useRef<ElementRef<'audio'>>(null);
    const sourceNode = useRef<MediaElementAudioSourceNode | null>();

    useEffect(() => {
        if (src) {
            setAudioSrc(src);
            audioElement.current?.load();
        }
    }, [src, audioElement]);

    const handleUserGesture = () => {
        if (!audioCtx) {
            setAudioCtx(new AudioContext());
        }
        if (audioCtx?.state === 'suspended') {
            audioCtx.resume();
        }
    }

    const audioAnalyzer = () => {
        if (!audioElement.current || !audioCtx) {
            return;
        }
        if (sourceNode.current) {
            return;
        } else if (audioCtx) {
            const analyzer = audioCtx.createAnalyser();
            analyzer.fftSize = 2048;

            const bufferLengthNumber = analyzer.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLengthNumber);

            sourceNode.current = audioCtx.createMediaElementSource(
                audioElement.current
            );

            sourceNode.current.connect(analyzer);
            sourceNode.current.connect(audioCtx.destination);
            analyzer.connect(audioCtx.destination);

            sourceNode.current.addEventListener('ended', () => {
                sourceNode.current?.disconnect();
                analyzer.disconnect();
            });

            setAnalyzerData({ analyzer, bufferLength: bufferLengthNumber, dataArray });
        }
    }

    useEffect(() => {
        const current = audioElement.current;

        if (current && audioSrc) {
            current.src = audioSrc;

            current.addEventListener("play", audioAnalyzer);
        }

        window.addEventListener("click", handleUserGesture);

        return () => {
            window.removeEventListener("click", handleUserGesture);
            audioElement.current?.removeEventListener("play", audioAnalyzer);

            audioCtx?.close();
        }
    }, [audioElement, audioCtx, audioAnalyzer]);


    return (
        <div>
            <audio ref={audioElement} src={audioSrc} autoPlay />
            {analyzerData && <Canvas style={canvasStyles} analyzerdData={analyzerData} size={size} color={color || "#ff0000"} />}
        </div>
    );
}