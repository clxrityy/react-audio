import type { Meta, StoryObj } from "@storybook/react";
import AudioPlayer from "../lib/AudioPlayer";

const meta: Meta = {
    title: "components/AudioPlayer",
    component: AudioPlayer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        track: {
            control: "object",
        },
        btnStyleProps: {
            control: "object",
        },
        autoplay: {
            control: "boolean",
        },
    }
} satisfies Meta<typeof AudioPlayer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        track: {
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
    },
}

export const WithButtonProps: Story = {
    args: {
        track: {
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
        btnStyleProps: {
            color: "#00ff9988",
            theme: "light",
            size: "lg"
        },
    },
}

export const WithTrackInfo: Story = {
    args: {
        track: {
            title: "Example",
            src: "./example.wav",
            thumbnail: "./apple-touch-icon.png",
            author: {
                name: "clxrity",
                url: "https://clxrity.xyz"
            }
        },
        btnStyleProps: {
            color: "red",
        }
    }
}