import styled from "styled-components";
import { AudioInputVisualizerProps } from "../../types";
import { useEffect, useRef, useState } from "react";
import Canvas from "./elements/Canvas";


const Container = styled.div<AudioInputVisualizerProps>`
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

const Input = styled.input<AudioInputVisualizerProps>`
    margin: 0;
`;

const Label = styled.label`
    margin: 0;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
`;

export default function AudioInputVisualizer({ btnStyleProps, inputAudioSettings, fftsize, ...props }: AudioInputVisualizerProps) {
    // states
    const [analyzerNode, setAnalyzerNode] = useState<AnalyserNode>();
    const [gainNode, setGainNode] = useState<GainNode>();
    const [bassEQ, setBassEQ] = useState<BiquadFilterNode>();
    const [midEQ, setMidEQ] = useState<BiquadFilterNode>();
    const [trebleEQ, setTrebleEQ] = useState<BiquadFilterNode>();

    const audioCtx = useRef<AudioContext>();

    const [volumeValue, setVolumeValue] = useState<number>(0);

    // funcs
    const handleUserGesture = async () => {
        if (!audioCtx.current) {
            audioCtx.current = new AudioContext();
        } 
        if (!gainNode && audioCtx.current) {
            const newGainNode = new GainNode(audioCtx.current, {
                gain: volumeValue
            });

            setGainNode(newGainNode);
        }
        if (!analyzerNode && audioCtx.current) {
            const newAnalyzerNode = new AnalyserNode(audioCtx.current, { fftSize: fftsize ? fftsize : 256 });
            setAnalyzerNode(newAnalyzerNode);
        }

        if (!bassEQ && audioCtx.current && bass.current) { 
            const newBassEQ = new BiquadFilterNode(audioCtx.current, {
                type: 'lowshelf',
                frequency: 500,
                gain: bass.current.valueAsNumber
            });

            setBassEQ(newBassEQ);
        }

        if (!midEQ && audioCtx.current && mid.current) { 
            const newMidEQ = new BiquadFilterNode(audioCtx.current, {
                type: 'peaking',
                Q: Math.SQRT1_2,
                frequency: 1500,
                gain: mid.current.valueAsNumber
            });

            setMidEQ(newMidEQ);
        }

        if (!trebleEQ && audioCtx.current && treble.current) { 
            const newTrebleEQ = new BiquadFilterNode(audioCtx.current, {
                type: 'highshelf',
                frequency: 3000,
                gain: treble.current.valueAsNumber
            });

            setTrebleEQ(newTrebleEQ);
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

    function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) { 
        if (gainNode) {
            setVolumeValue(parseFloat(e.target.value));
            gainNode.gain.value = volumeValue;
        }
    }

    function handleBassChange(e: React.ChangeEvent<HTMLInputElement>) { 
        if (bassEQ && audioCtx.current) {
            bassEQ.gain.setTargetAtTime(e.target.valueAsNumber, audioCtx.current.currentTime, 0.01);
        }
    }

    function handleMidChange(e: React.ChangeEvent<HTMLInputElement>) { 
        if (midEQ && audioCtx.current) {
            midEQ.gain.setTargetAtTime(e.target.valueAsNumber, audioCtx.current.currentTime, 0.01);
        }
    }
    
    function handleTrebleChange(e: React.ChangeEvent<HTMLInputElement>) { 
        if (trebleEQ && audioCtx.current) {
            trebleEQ.gain.setTargetAtTime(e.target.valueAsNumber, audioCtx.current.currentTime, 0.01);
        }
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
            if (audioCtx.current && analyzerNode && gainNode && bassEQ && midEQ && trebleEQ) {
                const input = await getInput();
                const source = audioCtx.current.createMediaStreamSource(input);

                source.connect(trebleEQ);
                source.connect(midEQ);
                source.connect(bassEQ);
                source.connect(gainNode);
                source.connect(analyzerNode);
                analyzerNode.connect(audioCtx.current.destination);
            }
        }

        if (analyzerNode && audioCtx.current) {
            setupContext();
        }

        window.addEventListener('click', handleUserGesture);

        if (volume.current) {
            volume.current.addEventListener('change', (e) => handleVolumeChange(e as any));
        }

        if (bass.current) {
            bass.current.addEventListener('change', (e) => handleBassChange(e as any));
        }

        if (mid.current) {
            mid.current.addEventListener('change', (e) => handleMidChange(e as any));
        }

        if (treble.current) {
            treble.current.addEventListener('change', (e) => handleTrebleChange(e as any));
        }

        return () => {
            window.removeEventListener('click', handleUserGesture);
            if (volume.current) {
                volume.current.removeEventListener('change', (e) => handleVolumeChange(e as any));
            }
            if (bass.current) {
                bass.current.removeEventListener('change', (e) => handleBassChange(e as any));
            }

            if (mid.current) {
                mid.current.removeEventListener('change', (e) => handleMidChange(e as any));
            }

            if (treble.current) {
                treble.current.removeEventListener('change', (e) => handleTrebleChange(e as any));
            }
        }
    }, [analyzerNode, audioCtx.current, volumeValue, volume.current, gainNode, bassEQ, midEQ, trebleEQ, bass.current, mid.current, treble.current]);

    // handle inputs


    return (
        <Container btnStyleProps={btnStyleProps} {...props}>
            {analyzerNode && <Canvas analyzernode={analyzerNode} />}
            <Grid>
                <Label htmlFor="volume">
                    Volume
                </Label>
                <Input ref={volume} type="range" defaultValue={volume.current ? volume.current.value : 0.5} step={0.01} id="volume" name="volume" min={-1} max={1} />
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