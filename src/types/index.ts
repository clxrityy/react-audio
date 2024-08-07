import React from 'react';

/**
 * @param src - The source of the audio file (mp3, ogg, etc.), required, recommended to be within your public/ directory``
 */
export type Track = {
    title?: string;
    src: string;
    thumbnail?: string;
    author?: {
        name: string;
        url?: string;
    };
};

export interface LibraryStyles extends React.CSSProperties {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    boxShadow?: string;
    theme?: "light" | "dark";
    
}