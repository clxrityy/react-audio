import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> { 
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}

export default function Button({ variant = "primary", size = "md", children, ...props }: ButtonProps) {
    
    const ButtonElement = styled.button<ButtonProps>`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.75rem;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none;
        ring: 2px solid #007bff;
    }
    &:hover {
        scale: 1.05;
    }
    ${({ variant }) => {
        switch (variant) {
            case "primary":
                return `
                    background-color: #007bff;
                    color: white;
                `;
            case "secondary":
                return `
                    background-color: #6c757d;
                    color: white;
                `;
            default:
                return `
                    background-color: #007bff;
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
    return (
        <ButtonElement variant={variant} size={size} {...props}>
            {children}
        </ButtonElement>
    );
}