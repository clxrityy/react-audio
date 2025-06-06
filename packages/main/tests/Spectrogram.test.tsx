import { render, screen } from "@testing-library/react"
import { Spectrogram } from "../src"
import { describe, it, expect, vi } from "vitest"

describe("Spectrogram", () => {
  it("renders correctly with default props", () => {
    render(<Spectrogram
      data-testid="spectrogram"
      src="drums.wav"
    />)
    expect(screen.getByTestId("spectrogram")).toBeDefined()
  })

  it("renders with custom width and height", () => {
    render(<Spectrogram
      data-testid="spectrogram"
      src="drums.wav"
      width={800}
      height={400}
    />)
    expect(screen.getByTestId("spectrogram")).toBeDefined()
  })

  it("calls onTimeUpdate when time updates", () => {
    const onTimeUpdate = vi.fn()
    render(<Spectrogram
      data-testid="spectrogram"
      src="drums.wav"
      onTimeUpdate={onTimeUpdate}
    />)

    // Simulate time update
    const newTime = 5
    onTimeUpdate(newTime)
    expect(onTimeUpdate).toHaveBeenCalledWith(newTime)
  }
  )
})
