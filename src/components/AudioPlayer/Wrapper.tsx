import { ComponentProps, forwardRef } from "react";
import Audio from "./Audio";

type AudioWrapperProps = ComponentProps<"div"> & {
    file: File;
}

const AudioWrapper = forwardRef<HTMLDivElement, AudioWrapperProps>(({ file, className, children, ...props }) => {
    return <div
        {...props}
        className={className}
    >
        <Audio file={file} />
        {children}
    </div>
});

export default AudioWrapper;