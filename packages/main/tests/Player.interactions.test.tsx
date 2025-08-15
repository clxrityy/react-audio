import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react";
import { Player } from "../src";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Basic media element mocks for jsdom
beforeEach(() => {
  vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(
    () => undefined,
  );
});

describe("Player interactions", () => {
  it("toggles play/pause buttons when clicked", async () => {
    render(
      <Player
        src="https://example.com/audio.mp3"
        autoplay={false}
        showNextPrevControls={false}
      />,
    );

    // Initially should show the play button
    const playBtn = screen.getByTitle("play");
    expect(playBtn).toBeTruthy();

    // Click play -> should switch to pause button
    fireEvent.click(playBtn);
    const pauseBtn = await screen.findByTitle("pause");
    expect(pauseBtn).toBeTruthy();

    // Click pause -> should switch back to play
    fireEvent.click(pauseBtn);
    const playBtnAgain = await screen.findByTitle("play");
    expect(playBtnAgain).toBeTruthy();
  });

  it("mutes/unmutes when volume button is clicked", () => {
    const { container } = render(
      <Player
        src="https://example.com/audio.mp3"
        autoplay={false}
        showNextPrevControls={false}
      />,
    );

    const audio = container.querySelector("audio")! as HTMLAudioElement;
    expect(audio.volume).toBeGreaterThan(0);

    const volBtn = screen.getByTitle("volume");
    fireEvent.click(volBtn);
    expect(audio.volume).toBe(0);

    fireEvent.click(volBtn);
    expect(audio.volume).toBeGreaterThan(0);
  });

  it("seeks when progress slider changes", async () => {
    const { container } = render(
      <Player
        src="https://example.com/audio.mp3"
        autoplay={false}
        showNextPrevControls={false}
      />,
    );

    const audio = container.querySelector("audio")! as HTMLAudioElement;

    // Ensure duration > 0 so the range input's max is not 0 (which clamps value)
    Object.defineProperty(audio, "duration", { value: 60, configurable: true });
    await act(async () => {
      audio.dispatchEvent(new Event("loadedmetadata"));
    });

    // Make currentTime writable in jsdom so setting it via handler works
    let internalTime = 0;
    Object.defineProperty(audio, "currentTime", {
      configurable: true,
      get: () => internalTime,
      set: (v: number) => {
        internalTime = Number(v);
      },
    });

    // The progress slider is the one inside the Progress wrapper (second slider in DOM)
    const sliders = container.querySelectorAll('input[type="range"]');
    const slider = sliders[1] as HTMLInputElement;
    // Sanity check: our mocked currentTime setter works
    audio.currentTime = 7;
    expect(audio.currentTime).toBe(7);
    audio.currentTime = 0;
    expect(audio.currentTime).toBe(0);

    // Update the input's value, then dispatch an input event so React fires onChange for range
    slider.value = "12";
    await act(async () => {
      fireEvent.input(slider, { target: { value: "12" } });
    });
    await waitFor(() => expect(audio.currentTime).toBe(12));
  });
});
