import { ComponentProps, forwardRef } from "react";

type AudioPlayerProps = ComponentProps<"audio"> & {
    file: File;
}

const AudioPlayer = forwardRef<HTMLAudioElement, AudioPlayerProps> (({file, className, ...props}, ref)=> {
    return (
        <audio
            className={className}
            {...props}
            ref={ref}
            controls
        >
            <source src={file.webkitRelativePath} type={file.type} />
            </audio>
    );
})

export default AudioPlayer;