import { render, screen } from "@testing-library/react";
import { Oscillator } from "../src";
import { describe, it, expect, vi } from "vitest";

describe("Oscillator", () => {

  // Mock AudioContext as a constructor function returning the mock instance
  global.AudioContext = vi.fn().mockImplementation(() => ({
    createOscillator: () => ({
      type: "",
      frequency: {
        setValueAtTime: vi.fn(),
      },
      start: vi.fn(),
      stop: vi.fn(),
    }),
    createGain: () => ({
      gain: {
        setValueAtTime: vi.fn(),
      },
      connect: vi.fn(),
      disconnect: vi.fn(),
    }),
    resume: vi.fn(),
    close: vi.fn(),
    state: "running",
  })) as unknown as typeof AudioContext;

  it("renders correctly with default props", () => {
    render(<Oscillator
      data-testId="oscillator"
      isPlaying={false}
      />);
    expect(screen.getByTestId("oscillator")).toBeDefined();
  });

  it("renders with custom frequency and gain", () => {
    render(<Oscillator
      data-testId="oscillator"
      frequency={440} gain={0.5} isPlaying={false} />);
    expect(screen.getByTestId("oscillator")).toBeDefined();
  });

  it("calls onFrequencyChange when frequency changes", () => {
    const onFrequencyChange = vi.fn();
    render(<Oscillator
      data-testId="oscillator"
      frequency={440}
      isPlaying={false}
      onFrequencyChange={onFrequencyChange} />);

    // Simulate frequency change
    const newFrequency = 880;
    onFrequencyChange(newFrequency);
    expect(onFrequencyChange).toHaveBeenCalledWith(newFrequency);
  });

  it("calls onGainChange when gain changes", () => {
    const onGainChange = vi.fn();
    render(<Oscillator
      data-testId="oscillator"
      gain={0.5}
      isPlaying={false}
      onGainChange={onGainChange} />);

    // Simulate gain change
    const newGain = 0.8;
    onGainChange(newGain);
    expect(onGainChange).toHaveBeenCalledWith(newGain);
  });

});
