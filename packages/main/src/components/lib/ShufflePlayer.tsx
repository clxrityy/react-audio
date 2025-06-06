import { ComponentProps, useState } from 'react'
import { Colors, BaseProps } from '../../util'
import { Player } from './Player'

export interface ShufflePlayerProps extends ComponentProps<'audio'> {
  srcs: []
  autoplay?: BaseProps['autoplay']
  color?: BaseProps['color']
  showNextPrevControls?: boolean
  showProgress?: BaseProps['showProgress']
  showVolume?: BaseProps['showVolume']
  shuffle?: boolean
  onNext?: () => void
  onPrev?: () => void
}

export function ShufflePlayer({
  srcs,
  autoplay = false,
  color = Colors.primary,
  showNextPrevControls = true,
  showProgress = true,
  showVolume = true,
  shuffle = false,
  onNext,
  onPrev,
  ...props
}: ShufflePlayerProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentSrc, setCurrentSrc] = useState<string>(
    srcs[currentIndex]!
  )

  if (shuffle) {
    setCurrentIndex(Math.floor(Math.random() * srcs.length))
  }

  return (
    <Player
      color={color}
      autoplay={autoplay}
      src={currentSrc}
      onNext={() => {
        setCurrentIndex((i) => i + 1)
        setCurrentSrc(srcs[currentIndex]!)
        if (onNext) {
          onNext()
        }
      }}
      onPrev={() => {
        setCurrentIndex((i) => i - 1)
        setCurrentSrc(srcs[currentIndex]!)
        if (onPrev) {
          onPrev()
        }
      }}
      showNextPrevControls={showNextPrevControls}
      showProgress={showProgress}
      showVolume={showVolume}
      {...props}
    />
  )
}
