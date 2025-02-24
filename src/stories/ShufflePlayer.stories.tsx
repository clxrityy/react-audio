import React from 'react'
import { ShufflePlayer, type Track } from '../lib'
import { Meta } from '@ladle/react'
;<Meta title="Components/ShufflePlayer" />

export default {
    title: 'ShufflePlayer',
    component: ShufflePlayer,
}

const tracks: Track[] = Array.from({ length: 4 }, (_, i) => ({
    src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i + 1}.mp3`,
    title: `Soundhelix ${i + 1}`,
    artist: {
        name: 'clxrity',
        url: 'https://wav.clxrity.xyz',
    },
}))

export const Default = () => <ShufflePlayer tracks={tracks} />
export const DontShowTracks = () => (
    <ShufflePlayer tracks={tracks} showTracks={false} border="none" />
)
export const CustomColor = () => (
    <ShufflePlayer tracks={tracks} color="purple" />
)
export const CustomBorder = () => (
    <ShufflePlayer tracks={tracks} border="1px solid red" color="red" />
)
