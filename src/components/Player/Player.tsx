type Props = {
    audio: string
}

const Player: React.FC<Props> = ({ audio }) => {
    return (
        <audio src={audio} />
    );
}

export default Player;