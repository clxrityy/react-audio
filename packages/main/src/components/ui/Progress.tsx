import { ComponentProps } from "react";

export interface ProgressProps extends ComponentProps<"input"> {
  value: number;
  max: number;
  buffered: number;
  color?: string;
}

export const Progress = ({
  value,
  max,
  buffered,
  color,
  ...props
}: ProgressProps) => {
  const width = max > 0 ? (value / max) * 100 : 0;
  const bufferedWidth = max > 0 ? (buffered / max) * 100 : 0;

  return (
    <>
      <div
        className={`relative w-40 h-2 bg-gray-300 rounded overflow-hidden`}
      >
        {/**ered progress bar
         * This is a gray bar that shows the buffered progress
         */}
        <div
          className="absolute top-0 left-0 h-full bg-gray-400 transition-all duration-200 rounded w-full"
          style={{
            width: `${bufferedWidth}%`,
            transition: "width 0.2s ease-in-out",
          }}
        />
        {/**
         * Progress bar
         * This is the colored bar that shows the current progress
         */}
        <div
          className={`absolute top-0 left-0 h-full rounded transition-all duration-200`}
          style={{
            width: `${width}%`,
            transition: "width 0.2s ease-in-out",
            backgroundColor: color || "#3b82f6",
          }}
        />
        {/**
         * Input element
         * This is the actual input element that is hidden
         * It is used to set the value of the progress bar
         */}
        <input
          type="range"
          value={value}
          max={max}
          min={0}
          className={`
          h-1 w-20 appearance-none rounded-full bg-inherit/50
          range-slider:h-2 range-slider:rounded-full
          ${props.className}
          `}
          style={{
            backgroundImage: `linear-gradient(to right, ${color ?? "#3b82f6"} ${width}%, transparent 0%)`,
            border: `1px solid ${color}`,
          }}
          onChange={(e) => props.onChange?.(e)}
          onInput={(e) => props.onChange?.(e as unknown as React.ChangeEvent<HTMLInputElement>)}
          {...props}
        />
      </div>
    </>
  );
};

