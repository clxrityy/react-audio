import {
    ElementRef,
    useEffect,
    useRef,
    useState,
} from 'react';
import styled from 'styled-components';
import { AnalyzerData } from '../../types';
import Canvas from '../../components/ui/Canvas';
import Player from './elements/Player';
import { WaveformProps } from '../../types';
import { audioAnalyzer as analyzer } from '../../utils/audioAnalyzer';

const WaveformDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    padding: 0.5rem;
    position: relative;
    border-radius: 0.5rem;
    background-color: transparent;
`

export default function Waveform({
    track,
    color,
    size,
    canvasStyles,
    showTrackInfo,
    btnStyleProps,
    autoplay,
    fftsize,
    ...props
}: WaveformProps) {
    const [analyzerData, setAnalyzerData] = useState<AnalyzerData>()
    const [audioCtx, setAudioCtx] = useState<AudioContext>()
    const [audioSrc, setAudioSrc] = useState<string>()
    const audioElement = useRef<ElementRef<'audio'>>(null)
    const sourceNode = useRef<MediaElementAudioSourceNode | null>()

    useEffect(() => {
        if (track.src) {
            setAudioSrc(track.src)
            audioElement.current?.load()
        }
    }, [track.src, audioElement])

    const handleUserGesture = () => {
        if (!audioCtx) {
            setAudioCtx(new AudioContext())
        }
        if (audioCtx?.state === 'suspended') { 
            audioCtx.resume();
        }
    }

    const audioAnalyzer = () => {
        if (sourceNode.current) {
            return
        }
        if (audioElement.current && audioCtx) {
            setAnalyzerData(analyzer(audioElement.current, audioCtx, sourceNode, fftsize));
        }
    }

    useEffect(() => {
        const current = audioElement.current

        if (current) {
            audioElement.current.src = audioSrc!
            current.addEventListener('play', audioAnalyzer)

            // if (current.played) {
            //     audioAnalyzer();
            // }
            audioAnalyzer()
        }

        window.addEventListener('click', handleUserGesture);

        return () => {
            audioElement.current?.removeEventListener('play', audioAnalyzer)
            window.removeEventListener('click', handleUserGesture)
            audioCtx?.close()
        }
    }, [audioCtx, audioElement, audioSrc]);

    return (
        <WaveformDiv {...props}>
            <Player
                autoplay={autoplay}
                btnStyleProps={btnStyleProps}
                audioElement={audioElement}
                track={{
                    src: track.src,
                }}
                showTrackInfo={showTrackInfo}
            />
            {analyzerData && (
                <Canvas
                    analyzerdData={analyzerData}
                    color={color || 'red'}
                    size={size}
                    style={canvasStyles}
                />
            )}

        </WaveformDiv>
    )
}
