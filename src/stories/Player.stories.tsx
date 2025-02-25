import React from 'react'
import { Player, Track } from '../lib'
import { Meta } from '@ladle/react'
;<Meta title="Components/Player" />

export default {
    title: 'Player',
    component: Player,
}

const track: Track = {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'SoundHelix Song 1',
    artist: {
        name: 'SoundHelix',
        url: 'https://www.soundhelix.com/',
        thumbnail: 'https://www.soundhelix.com/sites/default/files/SoundHelix-logo.png',
    }
}

export const Default = () => <Player track={track} showTrackInfo={true} />
export const NoTrackInfo = () => <Player track={track} showTrackInfo={false} />
export const CustomColor = () => <Player track={track} color="red" />
export const AutoPlay = () => <Player track={track} autoplay={true} />
