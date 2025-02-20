import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ShufflePlayer } from "../src/lib";
import React from "react";

describe("ShufflePlayer", () => {
    it("renders without crashing", () => {
        render(<ShufflePlayer role="shuffleplayer" tracks={[{src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}]}/>);
        expect(screen.getByRole("shuffleplayer")).toBeDefined();
    });
});