import { ComponentProps, forwardRef } from "react";

type AudioProps = ComponentProps<"audio"> & {
    file: File;
}

const Audio = forwardRef<HTMLAudioElement, AudioProps>(({ file, className, ...props }, ref) => {
    return (
        <audio
            className={className}
            {...props}
            ref={ref}
            src={file.webkitRelativePath}
        >
            
        </audio>
    );
})

export default Audio;