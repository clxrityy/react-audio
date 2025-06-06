import { render, screen } from '@testing-library/react'
import { Player } from '../src'
import { describe, it, expect } from 'vitest'

describe('Player', () => {
  it('renders the player component', () => {
    render(
      <Player
        data-testid="player"
        src="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
      />
    )

    expect(screen.getByTestId('player')).toBeDefined()
  })
})
