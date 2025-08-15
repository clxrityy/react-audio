import { ComponentProps, useCallback, useMemo, useState } from "react";
import { Colors, BaseProps } from "../../util";
import { Player } from "./Player";

export interface ShufflePlayerProps extends ComponentProps<"audio"> {
  srcs: string[];
  autoplay?: BaseProps["autoplay"];
  color?: BaseProps["color"];
  showNextPrevControls?: boolean;
  showProgress?: BaseProps["showProgress"];
  showVolume?: BaseProps["showVolume"];
  shuffle?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

/**
 * ShufflePlayer component for playing audio files in a shuffled order.
 * - Supports playback controls (play, pause, next, previous)
 * - Displays current playback time and duration
 * - Allows volume control
 */

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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentSrc = useMemo(
    () => srcs[currentIndex] ?? "",
    [srcs, currentIndex],
  );

  const nextIndex = useCallback(() => {
    if (srcs.length === 0) return 0;
    if (shuffle) return Math.floor(Math.random() * srcs.length);
    return (currentIndex + 1) % srcs.length;
  }, [currentIndex, shuffle, srcs]);

  const prevIndex = useCallback(() => {
    if (srcs.length === 0) return 0;
    if (shuffle) return Math.floor(Math.random() * srcs.length);
    return (currentIndex - 1 + srcs.length) % srcs.length;
  }, [currentIndex, shuffle, srcs]);

  return (
    <Player
      color={color}
      autoplay={autoplay}
      src={currentSrc}
      onNext={() => {
        setCurrentIndex(nextIndex());
        if (onNext) {
          onNext();
        }
      }}
      onPrev={() => {
        setCurrentIndex(prevIndex());
        if (onPrev) {
          onPrev();
        }
      }}
      showNextPrevControls={showNextPrevControls}
      showProgress={showProgress}
      showVolume={showVolume}
      onEnded={() => setCurrentIndex(nextIndex())}
      {...props}
    />
  );
}
