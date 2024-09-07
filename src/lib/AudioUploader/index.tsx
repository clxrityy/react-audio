import { useState } from "react";
import { AudioUploaderProps } from "../../types";
import styled from "styled-components";
import { Loading } from "../../styles/elements";
import Audio from "./elements/Audio";


const Container = styled.div<AudioUploaderProps>`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    padding: 0.5rem;
    position: relative;
    border-radius: 0.25rem;
    background-color: transparent;
    color: ${({ btnStyleProps }) => btnStyleProps?.theme ? btnStyleProps.theme === 'dark' ? '#fff' : '#000' : '#000'};
`

const Input = styled.input<AudioUploaderProps>`
    border: 1px solid ${({ btnStyleProps }) => btnStyleProps?.theme ? btnStyleProps.theme === 'dark' ? '#fff' : '#000' : '#000'};
    border-radius: 0.25rem;
    padding: 0.5rem;
    width: 100%;
    max-width: 300px;
    cursor: pointer;
    background-color: transparent;
    color: ${({ btnStyleProps }) => btnStyleProps?.theme ? btnStyleProps.theme === 'dark' ? '#fff' : '#000' : '#000'};
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${({ btnStyleProps }) => btnStyleProps?.theme ? btnStyleProps.theme === 'dark' ? '#fff' : '#000' : '#000'};
        color: ${({ btnStyleProps }) => btnStyleProps?.theme ? btnStyleProps.theme === 'dark' ? '#000' : '#fff' : '#fff'};
    }
    &:focus {
        outline: none;
    }
    &::placeholder {
        display: none;
    }
    &::-webkit-file-upload-button {
        visibility: hidden;
    }
    &::before {
        display: inline-block;
        border: 1px solid ${({ btnStyleProps }) => btnStyleProps?.theme ? btnStyleProps.theme === 'dark' ? '#fff' : '#000' : '#000'};
        border-radius: 0.25rem;
        padding: 0.5rem;
        cursor: pointer;
        background-color: transparent;
        color: ${({ btnStyleProps }) => btnStyleProps?.theme ? btnStyleProps.theme === 'dark' ? '#fff' : '#000' : '#000'};
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        transition: all 0.3s ease;
    }
`;

export default function AudioUploader({ btnStyleProps, onAudioUpload, canvasStyles, color, size, ...props }: AudioUploaderProps) { 
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const file = e.target.files?.[0];
        if (file && file.type.includes("audio")) { 
            setAudioFile(file);
            const url = URL.createObjectURL(file);
            setAudioUrl(url);

            if (onAudioUpload) { 
                onAudioUpload(file, url);
            }
        } else {
            alert("Please select an audio file");
        }
    }

    return (
        <Container {...props}>
            {
                !audioFile && <Input onChange={handleAudioUpload} type="file" accept="audio/*" />
            }
            {
                audioFile && !audioUrl && <Loading />
            }
            {
                audioUrl && <Audio src={audioUrl} color={color} canvasStyles={canvasStyles} size={size} />
            }
        </Container>
    )
}