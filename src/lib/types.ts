export type AnalyserData = {
    analyser: AnalyserNode | null
    bufferLength: number
    dataArray: Uint8Array
}

export type Track = {
    src: string
    title?: string
    thumbnail?: string
    artist?: {
        name: string
        url?: string
        thumbnail?: string
    }
}

export type FFTSize =
    | 32
    | 64
    | 128
    | 256
    | 512
    | 1024
    | 2048
    | 4096
    | 8192
    | 16384
    | 32768
