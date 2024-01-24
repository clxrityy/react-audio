import { AudioPlayerOptions } from "@/types";
import { defaultAudioPlayerOptions } from "@/util/config";
import AudioWrapper from "./Wrapper";
type AudioPlayerProps = {
    file: File,
    options?: AudioPlayerOptions
} & React.HTMLAttributes<HTMLDivElement>;

const AudioPlayer = ({ file, options = defaultAudioPlayerOptions, className }: AudioPlayerProps, ref: React.Ref<HTMLDivElement>) => {
    
    const manageOptions = () => {
        let opt = options;

        return opt;
    }

    console.log(manageOptions);

    return <>
    <AudioWrapper file={file} ref={ref} className={className}>
        <button>
            play / pause
        </button>
        </AudioWrapper>
    </>
}

export default AudioPlayer;