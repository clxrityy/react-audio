import { render, screen } from "@testing-library/react";
import { Waveform } from "../src";
import { describe, it, expect } from "vitest";

describe("Waveform", () => {
  it("renders correctly", () => {
    render(<>
      <Waveform
        title="waveform"
        src="drums.wav"
        autoplay={true}
      />
    </>);
    expect(screen.getByTitle("waveform")).toBeDefined();
  });
});
