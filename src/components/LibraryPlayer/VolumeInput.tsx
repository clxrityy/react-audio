import { ComponentProps, ReactElement } from "react";

interface VolumeInputProps extends ComponentProps<"input"> { 
    volume: number;
    volumeChange: (volume: number) => void;
}

export default function VolumeInput({ volume,  volumeChange, ...props }: VolumeInputProps): ReactElement<VolumeInputProps, "input"> {
    return <input
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
        style={{
            width: "70px",
            margin: 0,
            height: "12px",
            borderRadius: "30px",
            accentColor: "#007bff",
            appearance: "none",
            cursor: "pointer",
        }}
        {...props}
    />
}