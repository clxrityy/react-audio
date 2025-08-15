import { AudioSource, Button, Progress, VolumeSlider } from "../ui";
import {
  useEffect,
  useRef,
  useState,
  ComponentProps,
  ReactEventHandler,
  useCallback,
  forwardRef,
} from "react";
import { Colors, Icons, BaseProps } from "../../util";

export interface PlayerProps extends ComponentProps<"audio"> {
  onNext?: () => void;
  onPrev?: () => void;
  src: BaseProps["src"];
  autoplay?: BaseProps["autoplay"];
  loop?: BaseProps["loop"];
  showProgress?: BaseProps["showProgress"];
  showVolume?: BaseProps["showVolume"];
  color?: BaseProps["color"];
  showNextPrevControls?: boolean;
  size?: number;
}

/**
 * Audio player component for playing audio files.
 * - Supports playback controls (play, pause, next, previous)
 * - Displays current playback time and duration
 * - Allows volume control
 */

export const Player = forwardRef<HTMLAudioElement, PlayerProps>(function Player(
  {
    src,
    autoplay = false,
    loop = false,
    showProgress = true,
    showVolume = true,
    onNext,
    onPrev,
    showNextPrevControls = true,
    size = 24,
    color = Colors.primary,
    ...props
  },
  ref,
) {
  const internalRef = useRef<HTMLAudioElement>(null);
  // Prefer forwarded object ref if provided, else use internal ref.
  const audioRef = (
    ref && typeof ref === "object" ? ref : internalRef
  ) as React.MutableRefObject<HTMLAudioElement | null>;

  const [canPlay, setCanPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [buffered, setBuffered] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Set up audio element properties and events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = src;
    audio.load();
    audio.volume = volume;
    audio.loop = loop;
    audio.autoplay = autoplay;

    if (autoplay) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      setIsPlaying(!audio.paused);
    }
  }, [src, autoplay, loop, volume]);

  const play: ReactEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    },
    [audioRef],
  );

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const handleVolumeChange: ReactEventHandler<HTMLAudioElement> = useCallback(
    (e) => {
      setVolume(e.currentTarget.volume);
    },
    [],
  );

  const handleMuteUnmute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.volume !== 0) {
      audio.volume = 0;
      setVolume(0);
    } else {
      audio.volume = 0.25;
      setVolume(0.25);
    }
  }, []);

  const handleBufferProgress: ReactEventHandler<HTMLAudioElement> = useCallback(
    (e) => {
      const audio = e.currentTarget;
      const duration = audio.duration;

      if (duration > 0) {
        for (let i = 0; i < audio.buffered.length; i++) {
          if (
            audio.buffered.start(audio.buffered.length - 1 - i) <
            audio.currentTime
          ) {
            setBuffered(audio.buffered.end(audio.buffered.length - 1 - i));
            break;
          }
        }
      }
    },
    [],
  );

  const handleTimeUpdate: ReactEventHandler<HTMLAudioElement> = useCallback(
    (e) => {
      setCurrentTime(e.currentTarget.currentTime);
      handleBufferProgress(e);
    },
    [handleBufferProgress],
  );

  const handleDurationChange: ReactEventHandler<HTMLAudioElement> = useCallback(
    (e) => {
      setDuration(e.currentTarget.duration);
    },
    [],
  );

  const handleCanPlay: ReactEventHandler<HTMLAudioElement> = useCallback(
    (e) => {
      setDuration(e.currentTarget.duration);
      setCanPlay(true);
    },
    [],
  );

  const handleOnProgressChange: ReactEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const newTime = parseFloat(target.value);
    setCurrentTime(newTime);

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  useEffect(() => {
    if (autoplay && canPlay && audioRef.current) {
      setIsPlaying(true);
    }
  }, [autoplay, canPlay]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const updateProgress = () => setCurrentTime(audio.currentTime);
    const updateBuffered = () => {
      if (audio.buffered.length > 0) {
        setBuffered(audio.buffered.end(audio.buffered.length - 1));
      }
    };
    const onLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("progress", updateBuffered);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("progress", updateBuffered);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [src]);

  return (
    <div className="flex flex-col items-center gap-5 relative">
      <div className="flex items-center gap-2">
        <audio
          {...props}
          ref={audioRef}
          onCanPlay={handleCanPlay}
          onTimeUpdate={handleTimeUpdate}
          onDurationChange={handleDurationChange}
          onVolumeChange={handleVolumeChange}
          onPause={pause}
          autoPlay={autoplay}
          loop={loop}
          preload="auto"
          src={src}
        >
          <AudioSource src={src} />
        </audio>
      </div>
      <div className="flex flex-col items-center gap-4 z-30">
        {!isPlaying && !autoplay ? (
          <Button onClick={play} role="button" name="play" title="play">
            <Icons.Play />
          </Button>
        ) : (
          <Button onClick={pause} role="button" name="pause" title="pause">
            <Icons.Pause />
          </Button>
        )}
        {showVolume && (
          <div className="flex items-center gap-2">
            <Button
              onClick={handleMuteUnmute}
              role="button"
              name="volume"
              title="volume"
            >
              {volume === 0 ? (
                <Icons.VolumeOff />
              ) : volume < 0.5 ? (
                <Icons.VolumeDown />
              ) : (
                <Icons.VolumeUp />
              )}
            </Button>
            <VolumeSlider
              size={size}
              color={color}
              value={volume}
              onVolumeInput={(newVolume) => {
                if (!audioRef.current) return;
                audioRef.current.volume = newVolume;
                setVolume(newVolume);
              }}
            />
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 justify-between relative">
        {showNextPrevControls && onPrev && (
          <Button onClick={onPrev} role="button" name="prev" title="previous">
            <Icons.SkipPrevious />
          </Button>
        )}
        {showProgress && (
          <Progress
            color={color}
            value={currentTime}
            max={duration}
            buffered={buffered}
            onChange={handleOnProgressChange}
          />
        )}
        {showNextPrevControls && onNext && (
          <Button onClick={onNext} role="button" name="next" title="next">
            <Icons.SkipNext />
          </Button>
        )}
      </div>
    </div>
  );
});
// import { AudioSource, Button, Progress, VolumeSlider } from "../ui";
// import {
//   useEffect,
//   useRef,
//   useState,
//   ComponentProps,
//   ReactEventHandler,
//   useCallback,
// } from "react";
// import { Colors, Icons, BaseProps } from "../../util";

// export interface PlayerProps extends ComponentProps<"audio"> {
//   onNext?: () => void;
//   onPrev?: () => void;
//   src: BaseProps["src"];
//   autoplay?: BaseProps["autoplay"];
//   loop?: BaseProps["loop"];
//   showProgress?: BaseProps["showProgress"];
//   showVolume?: BaseProps["showVolume"];
//   color?: BaseProps["color"];
//   showNextPrevControls?: boolean;
//   size?: number;
// }

// export function Player({
//   src,
//   autoplay = false,
//   loop = false,
//   showProgress = true,
//   showVolume = true,
//   onNext,
//   onPrev,
//   showNextPrevControls = true,
//   size = 24,
//   color = Colors.primary,
//   ...props
// }: PlayerProps) {
//   const [canPlay, setCanPlay] = useState<boolean>(false);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const [volume, setVolume] = useState<number>(0.25);
//   const [buffered, setBuffered] = useState<number>(0);
//   const [duration, setDuration] = useState<number>(0);
//   const [currentTime, setCurrentTime] = useState<number>(0);
//   const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
//     null,
//   );

//   props.ref = props.ref ?? useRef<HTMLAudioElement>(null);

//   const { ref } = props;

//   useEffect(() => {
//     if (audioElement) {
//       audioElement.src = src;
//       audioElement.load();
//       audioElement.volume = volume;
//       audioElement.loop = loop;
//       audioElement.autoplay = autoplay;

//       if (autoplay) {
//         audioElement.play().catch((error) => {
//           console.error('Error playing audio:', error);
//           setIsPlaying(false);
//         });
//       }
//     }
//   }, [src]);

//   useEffect(() => {
//     if (!audioElement && ref.current) {
//       setAudioElement(ref.current);
//     } else {
//       audioElement?.addEventListener("canplaythrough", () => {
//         setCanPlay(true);
//       });
//     }

//     return () => {
//       audioElement?.removeEventListener("canplaythrough", () => {
//         setCanPlay(true);
//       });
//     };
//   }, [ref, audioElement]);

//   const play: ReactEventHandler<HTMLButtonElement> = useCallback(
//     (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       if (!audioElement) return;

//       try {
//         audioElement.play().then(() => {
//           setIsPlaying(true);
//         }).catch((error) => {
//           console.error('Error playing audio:', error);
//           setIsPlaying(false);
//         });
//       } catch (e) {
//         console.error(e);
//         setIsPlaying(false);
//       }
//     },
//     [audioElement],
//   );

//   const pause = useCallback(() => {
//     if (!audioElement) return;

//     audioElement.pause();
//     setIsPlaying(false);
//   }, [audioElement]);

//   const handleVolumeChange: ReactEventHandler<HTMLAudioElement> = useCallback(
//     (e) => {
//       if (!audioElement) return;

//       audioElement.volume = e.currentTarget.volume;
//       setVolume(e.currentTarget.volume);
//     },
//     [],
//   );

//   const handleMuteUnmute = useCallback(() => {
//     if (!audioElement) return;

//     if (audioElement.volume !== 0) {
//       audioElement.volume = 0;
//       setVolume(0);
//     } else {
//       audioElement.volume = 0.25;
//       setVolume(0.25);
//     }
//   }, [audioElement, volume]);

//   const handleBufferProgress: ReactEventHandler<HTMLAudioElement> = useCallback(
//     (e) => {
//       const audio = e.currentTarget;
//       const duration = audio.duration;

//       if (duration > 0) {
//         for (let i = 0; i < audio.buffered.length; i++) {
//           if (
//             audio.buffered.start(audio.buffered.length - 1 - i) <
//             audio.currentTime
//           ) {
//             setBuffered(audio.buffered.end(audio.buffered.length - 1 - i));
//             break;
//           }
//         }
//       }
//     },
//     [],
//   );

//   const handleTimeUpdate: ReactEventHandler<HTMLAudioElement> = useCallback(
//     (e) => {
//       setCurrentTime(e.currentTarget.currentTime);
//       handleBufferProgress(e);
//     },
//     [handleBufferProgress],
//   );

//   const handleDurationChange: ReactEventHandler<HTMLAudioElement> = useCallback(
//     (e) => {
//       setDuration(e.currentTarget.duration);
//     },
//     [],
//   );

//   const handleCanPlay: ReactEventHandler<HTMLAudioElement> = useCallback(
//     (e) => {
//       setDuration(e.currentTarget.duration);
//     },
//     [],
//   );

//   const handleOnProgressChange: ReactEventHandler<HTMLInputElement> = (e) => {
//     const newTime = parseFloat(e.currentTarget.value);
//     setCurrentTime(newTime);

//     if (audioElement) {
//       audioElement.currentTime = newTime;
//     }
//   };

//   useEffect(() => {
//     if (autoplay && canPlay && audioElement) {
//       setIsPlaying(true);
//     }
//   }, [autoplay, canPlay]);

//   useEffect(() => {
//     if (!audioElement) return;

//     const updateProgress = () => setCurrentTime(audioElement.currentTime);
//     const updateBuffered = () => {
//       if (audioElement.buffered.length > 0) {
//         setBuffered(
//           audioElement.buffered.end(audioElement.buffered.length - 1),
//         );
//       }
//     };

//     audioElement.addEventListener("timeupdate", updateProgress);
//     audioElement.addEventListener("progress", updateBuffered);

//     audioElement.addEventListener("loadedmetadata", () =>
//       setDuration(audioElement.duration),
//     );

//     return () => {
//       audioElement.removeEventListener("timeupdate", updateProgress);
//       audioElement.removeEventListener("progress", updateBuffered);
//       audioElement.removeEventListener("loadedmetadata", () =>
//         setDuration(audioElement.duration),
//       );
//     };
//   }, [src, audioElement]);

//   return (
//     <div className={`flex flex-col items-center gap-4 relative`}>
//       <div className="flex items-center gap-2">
//         <audio
//           {...props}
//           ref={props.ref ?? ref}
//           onCanPlay={handleCanPlay}
//           onTimeUpdate={handleTimeUpdate}
//           onDurationChange={handleDurationChange}
//           onVolumeChange={handleVolumeChange}
//           onPause={pause}
//           autoPlay={autoplay}
//           loop={loop}
//           preload="auto"
//           src={src}
//         >
//           <AudioSource src={src} type={ref.current?.src.split(".").pop()} />
//         </audio>
//       </div>
//       <div className="flex flex-col items-center gap-2 z-30">
//         {!isPlaying && !autoplay ? (
//           <Button onClick={play} role="button" name="play" title="play">
//             <Icons.Play />
//           </Button>
//         ) : autoplay && isPlaying ? (
//           <Button onClick={pause} role="button" name="pause" title="pause">
//             <Icons.Pause />
//           </Button>
//         ) : (
//           <Button onClick={pause} role="button" name="pause" title="pause">
//             <Icons.Pause />
//           </Button>
//         )}
//         {showVolume && (
//           <div className="flex items-center gap-2">
//             <Button
//               onClick={handleMuteUnmute}
//               role="button"
//               name="volume"
//               title="volume"
//             >
//               {volume === 0 ? (
//                 <Icons.VolumeOff />
//               ) : volume < 0.5 ? (
//                 <Icons.VolumeDown />
//               ) : (
//                 <Icons.VolumeUp />
//               )}
//             </Button>
//             <VolumeSlider
//               size={size}
//               color={color}
//               value={volume}
//               onVolumeInput={(newVolume) => {
//                 if (!audioElement) return;
//                 audioElement.volume = newVolume;
//                 setVolume(newVolume);
//               }}
//             />
//           </div>
//         )}
//         {/* {
//           showNextPrevControls && onNext && onPrev && (
//             <div className="flex items-center gap-2 justify-between">
//               <Button onClick={onPrev}>
//                 <Icons.SkipPrevious />
//               </Button>
//               <Button onClick={onNext}>
//                 <Icons.SkipNext />
//               </Button>
//             </div>
//           )
//         } */}
//       </div>
//       <div className="flex items-center gap-2 justify-between relative">
//         {showNextPrevControls && onPrev && (
//           <Button onClick={onPrev} role="button" name="prev" title="previous">
//             <Icons.SkipPrevious />
//           </Button>
//         )}
//         {showProgress && (
//           <Progress
//             color={color}
//             value={currentTime}
//             max={duration}
//             buffered={buffered}
//             onChange={handleOnProgressChange}
//           />
//         )}
//         {showNextPrevControls && onNext && (
//           <Button onClick={onNext} role="button" name="next" title="next">
//             <Icons.SkipNext />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// }
