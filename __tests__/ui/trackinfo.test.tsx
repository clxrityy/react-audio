import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrackInfo } from '../../src/components/ui/TrackInfo'
import type { Track } from '../../src/lib'
import React from 'react'

describe('TrackInfo', () => {
  it('renders without crashing', () => {
    const track: Track = {
      title: 'Soundhelix',
      artist: {
        name: 'test',
        thumbnail: 'test',
        url: 'test',
      },
      thumbnail: 'test',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    }
    render(<TrackInfo track={track} />)
    expect(screen.getByText('Soundhelix')).toBeDefined()
  })
})
