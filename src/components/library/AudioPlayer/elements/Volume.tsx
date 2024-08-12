import { ComponentProps } from "react";
import styled from "styled-components";
import CONFIG from "../../../../config";
import Button from "../../../Button";

const VolumeDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 640px;
    padding: 1rem;
    position: relative;
    border-radius: 0.5rem;
    background-color: transparent;
    backdrop-filter: blur(10px);
`;

const VolumeInput = styled.input`
    width: 70px;
    margin: 0;
    height: 12px;
    border-radius: 30px;
    accentColor: ${CONFIG.colors.primary};
    appearance: none;
    cursor: pointer;
    background-color: gray;
`;

interface VolumeProps extends ComponentProps<"div"> { 
    volume: number;
    volumeChange: (volume: number) => void;
    handleMute: () => void;
}


export default function Volume({ volume, volumeChange, handleMute, ...props }: VolumeProps) {
    return <VolumeDiv {...props}>
        <VolumeInput
        aria-label="Volume"
        type="range"
        name="volume"
        min={0}
        step={0.05}
        max={1}
        value={volume}
        onChange={(e) =>
            volumeChange(e.currentTarget.valueAsNumber)
        }
        />
        <Button onClick={handleMute}
            aria-label={volume > 0 ? "Mute" : "Unmute"}
        >
            {volume === 0 ? <CONFIG.icons.volumeOff /> : <CONFIG.icons.volumeUp />}
        </Button>
    </VolumeDiv>
}