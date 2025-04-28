import React from 'react'
import { Waveform, type Track } from '../lib'
import { Meta } from '@ladle/react'
;<Meta title="Components/Waveform" />

export default {
  title: 'Waveform',
  component: Waveform,
}

const track: Track = {
  src: './dreamy-guitar-loop.mp3',
  title: 'Dreamy Guitar Loop',
}

export const Default = () => <Waveform track={track} />
export const Small = () => (
  <Waveform track={track} style={{ width: 100, height: 40 }} />
)
export const Large = () => (
  <Waveform track={track} style={{ width: 1000, height: 400 }} />
)
export const NoTrackInfo = () => (
  <Waveform track={track} showTrackInfo={false} />
)
export const CustomColor = () => (
  <Waveform track={track} color="#ff0000" />
)
export const LowerFFTSize = () => (
  <Waveform track={track} fftSize={128} />
)
export const HigherFFTSize = () => (
  <Waveform track={track} fftSize={16384} />
)
