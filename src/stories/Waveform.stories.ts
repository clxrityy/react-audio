import type { Meta, StoryObj } from "@storybook/react";
import Waveform from "../lib/Waveform";

const meta: Meta = {
    title: 'components/Waveform',
    component: Waveform,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        track: {
            control: 'object',
        },
        color: {
            control: 'color',
        },
        size: {
            width: {
                control: 'number',
            },
            height: {
                control: 'number',
            },
        },
        canvasStyles: {
            control: 'object',
        },
        showTrackInfo: {
            control: 'boolean',
        },
    },
    args: {
        track: {
            src: "./example.wav",
            title: "SoundHelix Song 1",
            author: {
                name: "SoundHelix",
                url: "https://www.soundhelix.com",
            },
        },
    }
} satisfies Meta<typeof Waveform>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "red",
    },
    tags: ['autodocs'],
}

export const Small: Story = {
    args: {
        size: {
            width: 320,
            height: 160,
        },
        color: "blue",
    },
    tags: ['autodocs'],
}

export const Large: Story = {
    args: {
        size: {
            width: 520,
            height: 240,
        },
        color: "green",
    },
    tags: ['autodocs'],
}
