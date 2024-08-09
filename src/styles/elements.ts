import styled from "styled-components";
import { spin } from "./keyframes";

export const Loading = styled.div`
    display: inline-block;
    animation: ${spin} 1.25s linear infinite;
`;

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
`;