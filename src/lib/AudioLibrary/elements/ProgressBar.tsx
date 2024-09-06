import React, { ComponentPropsWithoutRef, ReactElement } from 'react'
import styled from 'styled-components'
import { ProgressInput } from '../../../styles/elements'
import { ButtonProps } from '../../../types'

interface ProgressBarCSSProps extends React.CSSProperties {
    '--progress-width': number
    '--buffered-width': number
}

interface ProgressBarProps extends ComponentPropsWithoutRef<'input'> {
    duration: number
    currentProgress: number
    buffered: number
    btnStyleProps?: ButtonProps
}

const ProgressDiv = styled.div<ProgressBarProps>`
    position: relative;
    height: 4px;
    display: flex;
    align-items: center;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);
`

export default function ProgressBar({
    duration,
    currentProgress,
    buffered,
    btnStyleProps,
    ...props
}: ProgressBarProps): ReactElement<ProgressBarProps, 'div'> {
    const progressBarWidth = isNaN(currentProgress / duration)
        ? 0
        : currentProgress / duration
    const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration

    const progressStyles: ProgressBarCSSProps = {
        '--progress-width': progressBarWidth || 0,
        '--buffered-width': bufferedWidth || 0,
    }

    return (
        <ProgressDiv
            duration={duration}
            currentProgress={currentProgress}
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
                value={currentProgress && currentProgress}
            />
        </ProgressDiv>
    )
}
