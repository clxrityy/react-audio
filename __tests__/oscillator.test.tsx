import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Oscillator } from '../src/lib'
import React from 'react'

describe('Oscillator', () => {
  it('renders without crashing', () => {
    if (typeof AudioContext === 'undefined') {
      return
    }
    render(<Oscillator isPlaying={false} role="oscillator" />)
    expect(screen.getByRole('oscillator')).toBeDefined()
  })
})
