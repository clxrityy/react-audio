import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Waveform } from '../src/lib'
import React from 'react'

describe('Waveform', () => {
  it('renders without crashing', () => {
    render(
      <Waveform
        role="waveform"
        track={{
          src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        }}
      />
    )
    expect(screen.getByRole('waveform')).toBeDefined()
  })
})
