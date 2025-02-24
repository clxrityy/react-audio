import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Spectrogram } from "../src/lib";
import React from "react";

describe("Spectrogram", () => {
    it("renders without crashing", () => {
        render(<Spectrogram role="spectrogram" track={{ src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}} />);
        expect(screen.getByRole("spectrogram")).toBeDefined();
    });
});