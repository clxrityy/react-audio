import React, { ComponentProps, ComponentPropsWithoutRef } from 'react'

/**
 * @param src - The source of the audio file (mp3, ogg, etc.), required, recommended to be within your public/ directory``
 */
export type Track = {
    title?: string
    src: string
    thumbnail?: string
    author?: {
        name: string
        url?: string
    }
}

export type FFTSize = 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768;

export interface LibraryStyles extends React.CSSProperties {
    backgroundColor?: string
    textColor?: string
    boxShadow?: string
    theme?: 'light' | 'dark'
    border?: string
}

export type AnalyzerData = {
    analyzer: AnalyserNode
    bufferLength: number
    dataArray: Uint8Array
}


interface Props { 
    track: Track;
    btnStyleProps?: ButtonProps;
    autoplay?: boolean;
};

export interface AudioLibraryProps {
    tracks: Track[];
    styles?: LibraryStyles;
    btnStyleProps?: ButtonProps;
    autoplay?: boolean;
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    color?: string;
    theme?: 'light' | 'dark';
    size?: 'sm' | 'md' | 'lg';
}

export interface AudioPlayerProps extends Props {}

export interface JustPlayerProps extends ComponentProps<"div">, Props {
    style?: React.CSSProperties;
    size?: number;
}

export interface WaveformProps extends ComponentProps<"div">, Props {
    color?: string;
    size?: {
        width: number;
        height: number;
    };
    canvasStyles?: React.CSSProperties;
    showTrackInfo?: boolean;
    fftsize?: FFTSize;
}

export interface WaveformImageProps extends ComponentProps<"div">, Props {
}

export interface AudioUploaderProps extends ComponentProps<"div"> {
    btnStyleProps?: ButtonProps;
    onAudioUpload?: (file: File, url: string) => any;
    canvasStyles?: React.CSSProperties;
    color?: string;
    size?: {
        width: number;
        height: number;
    }
}

export interface AudioInputVisualizerProps extends ComponentProps<"div"> { 
    btnStyleProps?: ButtonProps;
    inputAudioSettings?: {
        echoCancellation?: boolean;
        noiseSuppression?: boolean;
        autoGainControl?: boolean;
    }
    fftsize?: FFTSize;
}