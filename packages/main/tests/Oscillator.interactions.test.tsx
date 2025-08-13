import { render, screen, fireEvent } from "@testing-library/react";
import { Oscillator } from "../src";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Minimal AudioContext mock
beforeEach(() => {
  class MockAudioContext implements Partial<AudioContext> {
    public currentTime = 0;
    public state: AudioContextState = "running";
    public destination: AudioDestinationNode = {} as AudioDestinationNode;
    resume = vi.fn(() => Promise.resolve());
    close = vi.fn(() => Promise.resolve());
    createOscillator(): OscillatorNode {
      return {
        type: "sine",
        frequency: { setValueAtTime: vi.fn() } as unknown as AudioParam,
        start: vi.fn(),
        stop: vi.fn(),
        connect: vi.fn(),
        disconnect: vi.fn(),
      } as unknown as OscillatorNode;
    }
    createGain(): GainNode {
      return {
        gain: { setValueAtTime: vi.fn() } as unknown as AudioParam,
        connect: vi.fn(),
        disconnect: vi.fn(),
      } as unknown as GainNode;
    }
  }
  (globalThis as unknown as { AudioContext: typeof AudioContext }).AudioContext =
    MockAudioContext as unknown as typeof AudioContext;
});

describe("Oscillator interactions", () => {
  it("calls onPlayChange in controlled mode without toggling UI", () => {
    const onPlayChange = vi.fn();
    render(<Oscillator isPlaying={false} onPlayChange={onPlayChange} showControls />);

    const playBtn = screen.getByTitle("Play");
    fireEvent.click(playBtn);

    expect(onPlayChange).toHaveBeenCalledWith(true);
    // Still Play since controlled and prop not updated
    expect(screen.getByTitle("Play")).toBeTruthy();
  });

  it("invokes frequency and gain change callbacks on slider input", () => {
    const onFrequencyChange = vi.fn();
    const onGainChange = vi.fn();

    render(
      <Oscillator
        showControls
        onFrequencyChange={onFrequencyChange}
        onGainChange={onGainChange}
      />
    );

    const sliders = screen.getAllByRole("slider");
    const freqSlider = sliders[0] as HTMLInputElement;
    const gainSlider = sliders[1] as HTMLInputElement;

    fireEvent.change(freqSlider, { target: { value: "880" } });
    fireEvent.change(gainSlider, { target: { value: "0.8" } });

    expect(onFrequencyChange).toHaveBeenCalledWith(880);
    expect(onGainChange).toHaveBeenCalledWith(0.8);
  });
});
