import styled from "styled-components";
import { WaveformImageProps } from "../../types";


const Container = styled.div<WaveformImageProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function WaveformImage({ track, ...props }: WaveformImageProps): JSX.Element {

    

    return (
        <Container track={track} {...props}>
            
        </Container>
    )
}