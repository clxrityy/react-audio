import type { Meta, StoryObj } from "@storybook/react";
import AudioInputVisualizer from "../lib/AudioInputVisualizer";

const meta: Meta = {
    title: "components/AudioInputVisualizer",
    component: AudioInputVisualizer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        btnStyleProps: {
            control: "object",
        },
        inputAudioSettings: {
            control: "object",
        }
    }
} satisfies Meta<typeof AudioInputVisualizer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Recommended: Story = {
    args: {
        inputAudioSettings: {
            noiseSupression: true,
        }
    }
}

export const Default: Story = {
    args: {
        inputAudioSettings: {
            noiseSupression: false,
            echoCancellation: false,
            autoGainControl: false,
        }
    }
}