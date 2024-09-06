import styled from 'styled-components'
import { ProgressInput } from '../../../styles/elements'
import React from "react";
import { ButtonProps } from '../../../types';

interface ProgressBarCSSProps extends React.CSSProperties {
    '--progress-width': number
    '--buffered-width': number
}

interface ProgressBarProps extends React.ComponentPropsWithoutRef<'input'> {
    duration: number
    current_progress: number
    buffered: number
    btnStyleProps?: ButtonProps;
}

const ProgressDiv = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'buffered',
})<ProgressBarProps>`
    position: relative;
    height: 4px;
    top: -4px;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: 1000px) {
        top: -8px;
        margin: 0 1rem;
    }
`

export default function ProgressBar({
    duration,
    current_progress,
    buffered,
    btnStyleProps,
    ...props
}: ProgressBarProps) {
    const progressBarWidth = isNaN(current_progress / duration)
        ? 0
        : current_progress / duration
    const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration

    const progressStyles: ProgressBarCSSProps = {
        '--progress-width': progressBarWidth || 0,
        '--buffered-width': bufferedWidth || 0,
    }

    return (
        <ProgressDiv
            color={btnStyleProps?.color}
            duration={duration}
            current_progress={current_progress}
            buffered={buffered}
            {...props}
        >
            <ProgressInput
                color={btnStyleProps?.color}
                type="range"
                name="progress"
                style={progressStyles}
                min={0}
                max={duration}
                value={current_progress && current_progress}
                onChange={(e) => props.onChange && props.onChange(e)}
            />
        </ProgressDiv>
    )
}
