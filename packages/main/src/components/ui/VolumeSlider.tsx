import { ComponentProps } from "react";

export interface VolumeSliderProps extends ComponentProps<"input"> {
  value: number;
  onVolumeInput: (volume: number) => void;
  color?: string;
}

export function VolumeSlider({
  value,
  onVolumeInput,
  color,
  ...props
}: VolumeSliderProps) {
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={value}
      onChange={(e) => onVolumeInput(parseFloat(e.target.value))}
      className={`
        h-1 w-20 appearance-none rounded-full bg-inherit/50
        range-slider:h-2 range-slider:rounded-full
        ${props.className}
        `}
      style={{
        backgroundImage: `linear-gradient(to right, ${color ?? "#3b82f6"} ${value * 100}%, transparent 0%)`,
        border: `1px solid ${color}`,
      }}
      {...props}
    />
  );
}
