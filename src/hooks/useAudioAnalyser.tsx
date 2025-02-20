import { FFTSize } from '../lib/types'

export function useAudioAnalyzer(
    audioElement: HTMLAudioElement,
    audioContext: AudioContext,
    sourceNodeRef: React.RefObject<MediaElementAudioSourceNode | null>,
    fftSize: FFTSize
) {
    if (!audioElement || !audioContext) {
        console.warn('❌ Audio element or context is not available')
        return null
    }

    // Ensure only one source node is created
    if (!sourceNodeRef.current) {
        console.log('🎤 Creating new MediaElementAudioSourceNode...')
        sourceNodeRef.current =
            audioContext.createMediaElementSource(audioElement)
    } else {
        console.log('✅ MediaElementAudioSourceNode already exists.')
    }

    const analyser = audioContext.createAnalyser()
    analyser.fftSize = fftSize
    sourceNodeRef.current.connect(analyser)
    analyser.connect(audioContext.destination)

    console.log('🔍 Analyser Created:', analyser)

    return {
        analyser,
        getFrequencyData: () => {
            const bufferLength = analyser.frequencyBinCount
            const dataArray = new Uint8Array(bufferLength)
            analyser.getByteFrequencyData(dataArray)
            return dataArray
        },
    }
}
