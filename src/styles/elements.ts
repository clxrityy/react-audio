import styled from 'styled-components'
import { spin } from './keyframes'

export const Loading = styled.div`
    display: inline-block;
    animation: ${spin} 1.25s linear infinite;
`

export const ProgressInput = styled.input`
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

export const TimeSpan = styled.span`
    font-size: 0.8em;
    font-weight: 600;
    opacity: 0.75;
    z-index: 2;
    padding: 0.5rem;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    font-family: 'Space Mono', monospace;
`
