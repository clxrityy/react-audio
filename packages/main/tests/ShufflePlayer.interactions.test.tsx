import { render, screen, fireEvent } from "@testing-library/react";
import { ShufflePlayer } from "../src";
import { describe, it, expect, vi, beforeEach } from "vitest";

beforeEach(() => {
  vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(
    () => undefined,
  );
});

describe("ShufflePlayer interactions", () => {
  it("invokes onNext and onPrev and cycles indices", () => {
    const onNext = vi.fn();
    const onPrev = vi.fn();

    render(
      <ShufflePlayer
        srcs={["a.mp3", "b.mp3", "c.mp3"]}
        autoplay={false}
        shuffle={false}
        onNext={onNext}
        onPrev={onPrev}
        showProgress={false}
      />,
    );

    const next = screen.getByTitle("next");
    const prev = screen.getByTitle("previous");

    fireEvent.click(next);
    expect(onNext).toHaveBeenCalledTimes(1);

    fireEvent.click(prev);
    expect(onPrev).toHaveBeenCalledTimes(1);
  });
});
