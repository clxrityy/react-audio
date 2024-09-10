import styled from "styled-components";
import { AudioInputProps } from "../../types";
import { useEffect, useRef, useState } from "react";
import Canvas from "./elements/Canvas";


const Container = styled.div<AudioInputProps>`
    color: ${props => props.btnStyleProps ? props.btnStyleProps.theme === 'dark' ? '#fff' : '#000' : "inherit"};
    position: relative;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto min-content;
    justify-content: center;
    align-items: center;
    gap: 5px 10px;
`;

const Input = styled.input<AudioInputProps>`
    margin: 0;
`;

const Label = styled.label`
    margin: 0;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
`;

export default function AudioInputVisualizer({ btnStyleProps, inputAudioSettings, fftsize, ...props }: AudioInputProps) {
    // states
    const [analyzerNode, setAnalyzerNode] = useState<AnalyserNode>();
    const audioCtx = useRef<AudioContext>();


    // funcs
    const handleUserGesture = async () => {
        if (!audioCtx.current) {
            audioCtx.current = new AudioContext();
        } 
        if (!analyzerNode && audioCtx.current) {
            const newAnalyzerNode = new AnalyserNode(audioCtx.current, { fftSize: fftsize ? fftsize : 2048 });
            setAnalyzerNode(newAnalyzerNode);
        }
        if (audioCtx.current.state === 'suspended') { 
            await audioCtx.current.resume();
        }
    }

    async function getInput(): Promise<MediaStream> {
        return await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: inputAudioSettings?.echoCancellation || false,
                noiseSuppression: inputAudioSettings?.noiseSuppression || false,
                autoGainControl: inputAudioSettings?.autoGainControl || false,
                channelCount: 1
            },
        })
    }



    // refs for input elements
    const volume = useRef<HTMLInputElement>(null);
    const bass = useRef<HTMLInputElement>(null);
    const mid = useRef<HTMLInputElement>(null);
    const treble = useRef<HTMLInputElement>(null);

    // effects

    // setup audio context
    useEffect(() => {
        async function setupContext() {
            if (audioCtx.current && analyzerNode) {
                const input = await getInput();
                const source = audioCtx.current.createMediaStreamSource(input);

                source.connect(analyzerNode);
                analyzerNode.connect(audioCtx.current.destination);
            }
        }

        if (analyzerNode && audioCtx.current) {
            setupContext();
        }

        window.addEventListener('click', handleUserGesture);

        return () => {
            window.removeEventListener('click', handleUserGesture);
        }
    }, [analyzerNode, audioCtx.current]);

    // handle inputs


    return (
        <Container btnStyleProps={btnStyleProps} {...props}>
            {analyzerNode && <Canvas analyzernode={analyzerNode} />}
            <Grid>
                <Label htmlFor="volume">
                    Volume
                </Label>
                <Input ref={volume} type="range" defaultValue={volume.current?.value} step={"0.01"} id="volume" name="volume" min="0" max="1" />
                <Label htmlFor="bass">
                    Bass
                </Label>
                <Input ref={bass} type="range" id="bass" min="-10" defaultValue={bass.current?.value} max="10" />
                <Label htmlFor="mid">
                    Mid
                </Label>
                <Input ref={mid} type="range" id="mid" min="-10" defaultValue={mid.current?.value} max="10" />
                <Label htmlFor="treble">
                    Treble
                </Label>
                <Input ref={treble} type="range" id="treble" min="-10" defaultValue={treble.current?.value} max="10" />
            </Grid>
        </Container>
    )
}