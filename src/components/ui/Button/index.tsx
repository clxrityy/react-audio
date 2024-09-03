import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import CONFIG from '../../../config'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    size?: 'sm' | 'md' | 'lg'
    color?: string
    theme?: 'light' | 'dark'
}

const ButtonElement = styled.button<ButtonProps>`
    padding: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none;
        ring: 2px solid ${({ color }) => color || CONFIG.colors.primary};
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
    ${({ color, theme }) => {
        switch (color) {
            case 'primary':
                return `
                    background-color: ${color || CONFIG.colors.primary};
                    color: ${theme ? (theme === 'dark' ? CONFIG.themes.dark.textColor : CONFIG.themes.light.textColor) : CONFIG.themes.dark.textColor};
                `
            case 'secondary':
                return `
                    background-color: ${color || CONFIG.colors.secondary};
                    color: ${theme ? (theme === 'dark' ? CONFIG.themes.dark.textColor : CONFIG.themes.light.textColor) : CONFIG.themes.dark.textColor};
                `
            case 'outline':
                return `
                    background-color: transparent;
                    border: 2px solid ${color || CONFIG.colors.primary};
                    color: ${theme ? (theme === 'dark' ? CONFIG.themes.dark.textColor : CONFIG.themes.light.textColor) : CONFIG.themes.dark.textColor};
                `
            default:
                return `
                    background-color: ${color || CONFIG.colors.primary};
                    color: ${theme ? (theme === 'dark' ? CONFIG.themes.dark.textColor : CONFIG.themes.light.textColor) : CONFIG.themes.dark.textColor};
                `
        }
    }}

    ${({ size }) => {
        switch (size) {
            case 'sm':
                return `
                    padding: 0.25rem 0.5rem;
                    font-size: 0.875rem;
                `
            case 'md':
                return `
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                `
            case 'lg':
                return `
                    padding: 0.75rem 1.5rem;
                    font-size: 1.25rem;
                `
            default:
                return `
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                `
        }
    }}
`

/**
 *
 * @param variation - primary, secondary, outline (default: primary)
 * @param size - sm, md, lg (default: md)
 * @param rounded - none, sm, md, lg (default: custom)
 */

export default function Button({
    size = 'md',
    children,
    color,
    ...props
}: ButtonProps) {
    return (
        <ButtonElement size={size} {...props}>
            {children}
        </ButtonElement>
    )
}
