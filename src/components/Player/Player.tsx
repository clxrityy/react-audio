type Props = {
    audio: string
}

const Player: React.FC<Props> = ({ audio }, ...props) => {
    return (
        <h1 {...props} className="text-xl">{audio}</h1>
    );
}

export default Player;