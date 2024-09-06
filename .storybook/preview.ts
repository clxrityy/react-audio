import type { Preview } from '@storybook/react'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
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
}

export default preview
