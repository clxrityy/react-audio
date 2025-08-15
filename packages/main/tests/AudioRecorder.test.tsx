import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AudioRecorder } from "../src/components/lib/AudioRecorder";

// Minimal MediaRecorder polyfill for jsdom test
class MockMediaRecorder {
  public ondataavailable: ((e: { data: Blob }) => void) | null = null;
  public onstop: (() => void) | null = null;
  private chunks: Blob[] = [];
  state: string = "inactive";
  constructor(public stream: MediaStream) {}
  start() {
    this.state = "recording";
    // emit fake chunk
    const blob = new Blob([new Uint8Array([1, 2, 3])], { type: "audio/webm" });
    this.chunks.push(blob);
    this.ondataavailable?.({ data: blob });
  }
  stop() {
    this.state = "inactive";
    this.onstop?.();
  }
  static isTypeSupported() {
    return true;
  }
}

// Minimal MediaStream polyfill
class MockMediaStream {}
// @ts-expect-error polyfill
global.MediaStream = MockMediaStream;
// @ts-expect-error assign mock MediaRecorder
global.MediaRecorder = MockMediaRecorder;
// @ts-expect-error mock mediaDevices
navigator.mediaDevices = {
  getUserMedia: vi
    .fn()
    .mockResolvedValue(new MockMediaStream() as unknown as MediaStream),
};

beforeEach(() => {
  // reset mocks
  (
    navigator.mediaDevices.getUserMedia as unknown as { mockClear: () => void }
  ).mockClear();
});

describe("AudioRecorder", () => {
  it("renders controls and starts/stops recording", async () => {
    render(<AudioRecorder />);
    const recordBtn = screen.getByTitle(/record/i);
    fireEvent.click(recordBtn);
    await waitFor(() =>
      expect(recordBtn.getAttribute("title")?.toLowerCase()).toBe("stop"),
    );
    fireEvent.click(screen.getByTitle(/stop/i));
    await waitFor(() => {
      const dl = screen.getByRole("button", { name: /download/i });
      expect(dl.hasAttribute("disabled")).toBe(false);
    });
  });
});
