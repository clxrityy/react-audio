import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import CONFIG from "../../config";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variation?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}

const ButtonElement = styled.button<ButtonProps>`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.75rem;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none;
        ring: 2px solid ${CONFIG.colors.primary};
    }
    &:hover {
        scale: 1.05;
    }
    &:active {
        scale: 0.95;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    ${({ variation }) => {
        switch (variation) {
            case "primary":
                return `
                    background-color: ${CONFIG.colors.primary};
                    color: white;
                `;
            case "secondary":
                return `
                    background-color: ${CONFIG.colors.secondary};
                    color: white;
                `;
            default:
                return `
                    background-color: ${CONFIG.colors.primary};
                    color: white;
                `;
        }
    }}

    ${({ size }) => {
        switch (size) {
            case "sm":
                return `
                    padding: 0.25rem 0.5rem;
                    font-size: 0.875rem;
                `;
            case "md":
                return `
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                `;
            case "lg":
                return `
                    padding: 0.75rem 1.5rem;
                    font-size: 1.25rem;
                `;
            default:
                return `
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                `;
        }
    }}
`;

export default function Button({ variation = "primary", size = "md", children, ...props }: ButtonProps) {

    return (
        <ButtonElement variation={variation} size={size} {...props}>
            {children}
        </ButtonElement>
    );
}