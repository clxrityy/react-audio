import React from "react";
import { ComponentPropsWithoutRef, ReactElement } from "react";
import styled from "styled-components";
import { ProgressInput } from "../../../../styles/elements";

interface ProgressBarCSSProps extends React.CSSProperties {
    "--progress-width": number;
    "--buffered-width": number;
}

interface ProgressBarProps extends ComponentPropsWithoutRef<"input"> {
    duration: number;
    currentProgress: number;
    buffered: number;
}

const ProgressDiv = styled.div<ProgressBarProps>`
        position: absolute;
        height: 4px;
        top: -4px;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.1);

        @media only screen and (max-width: 1000px) {
            top: -8px;
            margin: 0 1rem;
        }
`;

export default function ProgressBar({ duration, currentProgress, buffered, ...props }: ProgressBarProps): ReactElement<ProgressBarProps, "div"> {

    const progressBarWidth = isNaN(currentProgress / duration) ? 0 : (currentProgress / duration);
    const bufferedWidth = isNaN(buffered / duration) ? 0 : (buffered / duration);

    const progressStyles: ProgressBarCSSProps = {
        "--progress-width": progressBarWidth || 0,
        "--buffered-width": bufferedWidth || 0,
    }

    return (
        <ProgressDiv
            duration={duration}
            currentProgress={currentProgress}
            buffered={buffered}
            {...props}
            
        >
            <ProgressInput
                type="range"
                name="progress"
                style={progressStyles}
                min={0}
                max={duration}
                value={currentProgress && currentProgress}
            />
        </ProgressDiv>
    )
}