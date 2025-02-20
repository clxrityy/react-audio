import React from 'react'
import { ShufflePlayer, type Track } from '../lib'

export default {
    title: 'ShufflePlayer',
    component: ShufflePlayer,
}

const tracks: Track[] = Array.from({ length: 5 }, (_, i) => ({
    src: '/dreamy-guitar-loop.mp3',
    title: `Dreamy Guitar Loop ${i + 1}`,
    thumbnail: '/apple-touch-icon.png',
    artist: {
        name: 'clxrity',
        url: 'https://wav.clxrity.xyz',
        thumbnail: '/apple-touch-icon.png',
    },
}))

export const Default = () => <ShufflePlayer tracks={tracks} />
