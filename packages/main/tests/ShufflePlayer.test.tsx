import { render, screen } from "@testing-library/react";
import { ShufflePlayer } from "../src";
import { describe, it, expect, vi } from "vitest";

describe("ShufflePlayer", () => {
  it("renders the shuffle player component", () => {
    render(
      <ShufflePlayer data-testid="shuffle-player" srcs={[]} autoplay={false} />,
    );
    expect(screen.getByTestId("shuffle-player")).toBeDefined();
  });

  it("calls onNext when next is clicked", () => {
    const onNext = vi.fn();
    render(
      <ShufflePlayer
        role="shuffle-player"
        srcs={[]}
        autoplay={false}
        onNext={onNext}
      />,
    );

    const nextButton = screen.getByTitle("next");
    nextButton.click();

    expect(onNext).toHaveBeenCalled();
  });

  it("calls onPrev when previous is clicked", () => {
    const onPrev = vi.fn();
    render(
      <ShufflePlayer
        role="shuffle-player"
        srcs={[]}
        autoplay={false}
        onPrev={onPrev}
      />,
    );

    const prevButton = screen.getByTitle("previous");
    prevButton.click();

    expect(onPrev).toHaveBeenCalled();
  });
});
