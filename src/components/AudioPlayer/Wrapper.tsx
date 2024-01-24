import { ComponentPropsWithRef, forwardRef } from "react";
import Audio from "./Audio";

type AudioWrapperProps = ComponentPropsWithRef<"div"> & {
    file: File;
}

const AudioWrapper = forwardRef<HTMLDivElement, AudioWrapperProps>(({ file, className, children, ...props }, ref) => {
    return <div
        {...props}
        ref={ref}
        className={className}
    >
        <Audio file={file} />
        {children}
    </div>
});

export default AudioWrapper;