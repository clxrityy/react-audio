import type { Meta, StoryObj } from "@storybook/react";
import JustPlayer from "../lib/JustPlayer";

const meta: Meta = {
    title: 'components/JustPlayer',
    component: JustPlayer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        style: { control: 'object' },
        track: { 
            control: 'object',
        },
        size: {
            control: "number"
        },
        btnStyleProps: {
            control: 'object',
        },
        autoplay: {
            control: 'boolean',
        }
    },
    args: {
        track: {
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
    },
} satisfies Meta<typeof JustPlayer>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Default',
        size: 75,
        btnStyleProps: {}
    },
}

export const WithButtonProps: Story = {
    args: {
        btnStyleProps: {
            color: "blue",
        },
        size: 150
    },
}

export const Youtube: Story = {
    args: {
        style: {
            backgroundColor: "red",
            color: "white",
            padding: "1rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        size: 50
    },
}