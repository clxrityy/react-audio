import { render, screen } from "@testing-library/react";
import { Waveform } from "../src";
import { describe, it, expect, vi } from "vitest";

describe("Waveform", () => {
  // Mock AudioContext as a constructor function returning the mock instance
  global.AudioContext = vi.fn().mockImplementation(() => ({
    createAnalyser: () => ({
      fftSize: 2048,
      frequencyBinCount: 1024,
      getFloatTimeDomainData: vi.fn(),
      getFloatFrequencyData: vi.fn(),
      connect: vi.fn(),
      disconnect: vi.fn(),
      smoothingTimeConstant: 0.8,
      minDecibels: -100,
      maxDecibels: -30,
    }),
    createBufferSource: () => ({
      connect: vi.fn(),
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
    createMediaElementSource: vi.fn(() => ({
      connect: vi.fn(),
      disconnect: vi.fn(),
    })),
    createMediaStreamSource: vi.fn(() => ({
      connect: vi.fn(),
      disconnect: vi.fn(),
    })),
  })) as unknown as typeof AudioContext;

  it("renders correctly", () => {
    render(
      <>
        <Waveform data-testid="waveform" src="drums.wav" />
      </>,
    );
    expect(screen.getByTestId("waveform")).toBeDefined();
  });
});
