import React from 'react'
import { Spectrogram, type SpectrogramProps } from '../lib'
import { Meta } from '@ladle/react'

;<Meta title="Components/Spectrogram" />

export default {
    title: 'Spectrogram',
    component: Spectrogram,
}

const defaultProps: SpectrogramProps = {
    track: {
        src: '/dreamy-guitar-loop.mp3',
    },
}

export const Default = () => <Spectrogram {...defaultProps} />

const customSizeProps: SpectrogramProps = {
    ...defaultProps,
    width: 400,
    height: 200,
}

export const CustomSize = () => <Spectrogram {...customSizeProps} />

const customColorMapProps: SpectrogramProps = {
    ...defaultProps,
    colorMap: ['#333', '#255', '#888', '#ddd'],
}

export const CustomColorMap = () => <Spectrogram {...customColorMapProps} />

const customFillStyleProps: SpectrogramProps = {
    ...defaultProps,
    fillStyle: '#ddd',
}

export const CustomFillStyle = () => <Spectrogram {...customFillStyleProps} />

const loopProps: SpectrogramProps = {
    ...defaultProps,
    loop: true,
}

export const Loop = () => <Spectrogram {...loopProps} />

const customSmoothingTimeConstantProps: SpectrogramProps = {
    ...defaultProps,
    smoothingTimeConstant: 0.9,
}

export const CustomSmoothingTimeConstant = () => (
    <Spectrogram {...customSmoothingTimeConstantProps} />
)

const customFFTSizeProps: SpectrogramProps = {
    ...defaultProps,
    fftSize: 2048,
}

export const CustomFFTSize = () => <Spectrogram {...customFFTSizeProps} />
