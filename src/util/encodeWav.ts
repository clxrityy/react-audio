export function encodeWav(audioBuffer: AudioBuffer) {
  const numOfChannels = audioBuffer.numberOfChannels
  const length = audioBuffer.length
  const buffer = new ArrayBuffer(length)
  const view = new DataView(buffer)

  const writeString = (offset: number, string: string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i))
    }
  }

  const floatTo16BitPCM = (
    output: DataView,
    offset: number,
    input: Float32Array
  ) => {
    for (let i = 0; i < input.length; i++, offset += 2) {
      const s = Math.max(-1, Math.min(1, input[i]))
      output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true)
    }
  }

  writeString(0, 'RIFF')
  view.setUint32(4, 32 + length * 2, true)
  writeString(8, 'WAVE')
  writeString(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, numOfChannels, true)
  view.setUint32(24, audioBuffer.sampleRate, true)
  view.setUint32(28, audioBuffer.sampleRate * 2 * numOfChannels, true)
  view.setUint16(32, numOfChannels * 2, true)
  view.setUint16(34, 16, true)
  writeString(36, 'data')
  view.setUint32(40, length * 2, true)

  let offset = 44

  for (let channel = 0; channel < numOfChannels; channel++) {
    const data = audioBuffer.getChannelData(channel)
    floatTo16BitPCM(view, offset, new Float32Array(data))
    offset += data.length * 2
  }

  return new Blob([view], { type: 'audio/wav' })
}
