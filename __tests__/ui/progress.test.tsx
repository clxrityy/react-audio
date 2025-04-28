import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Progress } from '../../src/components/ui/Progress'
import React from 'react'

describe('Progress', () => {
  const duration = 100
  const currentTime = 50
  const buffered = 75

  it('renders without crashing', () => {
    render(
      <Progress
        role="progress"
        duration={duration}
        current_progress={currentTime}
        buffered={buffered}
      />
    )
    expect(screen.getByRole('progress')).toBeDefined()
  })
})
