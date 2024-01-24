import { ComponentPropsWithRef, forwardRef } from "react";
import AudioWrapper from "./Wrapper";

type AudioPlayerProps = ComponentPropsWithRef<"div"> & {
    file: File;
    options?: 
}


const AudioPlayer = forwardRef<HTMLDivElement, AudioPlayerProps>(({ file, className, ...props}, ref) => {
    
    return <AudioWrapper {...props} ref={ref} className={className} file={file}>

        

    </AudioWrapper>
});