import React from "react";
import { ComponentPropsWithoutRef, ReactElement } from "react";
import styled from "styled-components";

interface ProgressBarCSSProps extends React.CSSProperties {
    "--progress-width": number;
    "--buffered-width": number;
}

interface ProgressBarProps extends ComponentPropsWithoutRef<"input"> {
    duration: number;
    currentProgress: number;
    buffered: number;
}

export default function ProgressBar({ duration, currentProgress, buffered, ...props }: ProgressBarProps): ReactElement<ProgressBarProps, "div"> {

    const progressBarWidth = isNaN(currentProgress / duration) ? 0 : (currentProgress / duration);
    const bufferedWidth = isNaN(buffered / duration) ? 0 : (buffered / duration);

    const progressStyles: ProgressBarCSSProps = {
        "--progress-width": progressBarWidth || 0,
        "--buffered-width": bufferedWidth || 0,
    }

    const ProgressInput = styled.input`
        &::webkit-slider-thumb {
            z-index: 4;
            position: relative;
        }
        &::before {
            transform: scaleX(var(progress-width));
            z-index: 3;
        }
        &::after {
            transform: scaleX(var(buffered-width));
            z-index: 2;
            tranform-origin: left;
        }
    `

    return (
        <div
            {...props}
            style={{
                position: "absolute",
                height: "4px",
                top: "-4px",
                left: 0,
                right: 0,
            }}
        >
            <ProgressInput
                type="range"
                name="progress"
                style={progressStyles}
                min={0}
                max={duration}
                value={currentProgress && currentProgress}
            />
        </div>
    )
}