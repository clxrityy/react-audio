import type { Meta, StoryObj } from "@storybook/react";
import AudioLibrary from "../lib/AudioLibrary";

const meta: Meta = {
    title: "components/AudioLibrary",
    component: AudioLibrary,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        tracks: [
            {
                control: "object"
            }
        ],
        btnStyleProps: {
            control: "object",
        },
        autoplay: {
            control: "boolean",
        },
        styles: {
            control: "object",
        }
    }
} satisfies Meta<typeof AudioLibrary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tracks: [
            {
                title: "Example",
                src: "./example.wav",
                author: {
                    name: "clxrity",
                    url: "https://clxrity.xyz"
                }
            },
            {
                title: "Example 2",
                src: "./example.wav",
                author: {
                    name: "MJ Anglin",
                    url: "https://mjanglin.com"
                }
            }
        ]
    }
}

export const WithStyles: Story = {
    args: {
        tracks: [

            {
                title: "Example",
                src: "./example.wav",
                author: {
                    name: "clxrity",
                    url: "https://clxrity.xyz"
                }
            },
            {
                title: "Example 2",
                src: "./example.wav",
                author: {
                    name: "MJ Anglin",
                    url: "https://mjanglin.com"
                }
            }
        ],
        styles: {
            backgroundColor: "#ff0bbb99",
            textColor: "white",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            theme: "dark",
            border: "1px solid rgba(0, 0, 0, 0.2)"
        },
        btnStyleProps: {
            color: "#00ff9988",
            theme: "light",
            size: "lg"
        }
    }
}