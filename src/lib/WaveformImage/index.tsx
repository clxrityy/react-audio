import { ComponentPropsWithRef, useEffect, useState } from "react";
import { Track } from "../../types";
import { generateWaveformImage } from "../../utils/ffmpeg";

interface Props extends ComponentPropsWithRef<"div"> {
    track: Track;
    output: string;
}

export default function WaveformImage({ track, output }: Props) {
    
    const [waveformUrl, setWaveformUrl] = useState<string>("");

    useEffect(() => {
        const fetchWaveform = async () => {
            try {
                await generateWaveformImage(track.src, output);

                setWaveformUrl(output);
            } catch (error) {
                console.error(`Error generating waveform image: ${error}`);
            }
        }

        fetchWaveform();
    }, [track.src]);

    return (
        <div>
            <img src={waveformUrl} alt={track.title || "Waveform"} />
        </div>
    )
}