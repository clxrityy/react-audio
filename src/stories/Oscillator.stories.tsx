import React from 'react'
import { Oscillator, OscillatorProps } from '../lib'
import { Button } from '../components/ui/Button'
import { ICONS } from '../config'
import { Meta } from '@ladle/react'
;<Meta title="Components/Oscillator" />

export default {
  title: 'Oscillator',
  component: Oscillator,
}

const defaultProps: OscillatorProps = {
  type: 'sine',
  frequency: 440,
  gain: 0.5,
  isPlaying: false,
}

export const Default = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <ICONS.pause /> : <ICONS.play />}
      </Button>
      <Oscillator {...defaultProps} isPlaying={isPlaying} />
    </div>
  )
}

export const Sawtooth = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <ICONS.pause /> : <ICONS.play />}
      </Button>
      <Oscillator
        {...defaultProps}
        type="sawtooth"
        isPlaying={isPlaying}
      />
    </div>
  )
}

export const Square = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <ICONS.pause /> : <ICONS.play />}
      </Button>
      <Oscillator
        {...defaultProps}
        type="square"
        isPlaying={isPlaying}
      />
    </div>
  )
}

export const Triangle = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <ICONS.pause /> : <ICONS.play />}
      </Button>
      <Oscillator
        {...defaultProps}
        type="triangle"
        isPlaying={isPlaying}
      />
    </div>
  )
}

export const Gain = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <ICONS.pause /> : <ICONS.play />}
      </Button>
      <Oscillator
        {...defaultProps}
        gain={0.1}
        isPlaying={isPlaying}
      />
    </div>
  )
}

export const Frequency = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <ICONS.pause /> : <ICONS.play />}
      </Button>
      <Oscillator
        {...defaultProps}
        frequency={880}
        isPlaying={isPlaying}
      />
    </div>
  )
}
