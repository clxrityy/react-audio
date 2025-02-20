export function AudioSource({ src }: { src: string }) {
    if (
        src.endsWith('.ogg') ||
        src.endsWith('.wav') ||
        src.endsWith('.aac') ||
        src.endsWith('.flac') ||
        src.endsWith('.mp3') ||
        src.endsWith('.webm') ||
        src.endsWith('.m4a')
    ) {
        return <source src={src} type={`audio/${src.split('.').pop()}`} />
    }
}
