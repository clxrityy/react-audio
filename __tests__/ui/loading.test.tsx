import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Loading } from '../../src/components/ui/Loading'
import React from 'react'

describe('Loading', () => {
  it('renders without crashing', () => {
    render(<Loading title="loading-test" />)
    expect(screen.getByTitle('loading-test')).toBeDefined()
  })
})
