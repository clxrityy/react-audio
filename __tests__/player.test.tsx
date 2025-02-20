import React from "react";
import { render, screen } from "@testing-library/react";
import { Player } from "../src/lib";
import { describe, it, expect } from "vitest";

describe("Player", () => {
    it("renders without crashing", () => {
        render(<Player 
            role="player"
            track={{
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            title: "Soundhelix",
            artist: {
                name: "test",
                url: "test",
                thumbnail: "test"
            },
            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png"
        }} 
        />);
        expect(screen.getByRole("player")).toBeDefined();
    });
});