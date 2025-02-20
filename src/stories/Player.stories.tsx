import React from 'react'
import { Player, Track } from '../lib'

export default {
    title: 'Player',
    component: Player,
}

const track: Track = {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'SoundHelix Song 1',
}

export const Default = () => <Player track={track} showTrackInfo={true} />
export const NoTrackInfo = () => <Player track={track} showTrackInfo={false} />
export const CustomColor = () => <Player track={track} color="red" />
export const AutoPlay = () => <Player track={track} autoplay={true} />
