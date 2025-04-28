import { ComponentProps } from 'react'
import { cn } from '../../util/cn'
import { COLORS } from '../../config'

interface VolumeSliderProps extends ComponentProps<'input'> {
  volume: number
  onVolumeChnge: (volume: number) => void
  color?: string
}

export function VolumeSlider({
  volume,
  onVolumeChnge,
  className,
  color,
  ...props
}: VolumeSliderProps) {
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={volume}
      onChange={(e) => onVolumeChnge(parseFloat(e.target.value))}
      className={cn(
        'h-1 w-20 appearance-none rounded-full bg-inherit/50',
        `range-slider:h-2 range-slider:rounded-full progress-input`,
        // ${color ? `range-slider:bg-[${color}]` : `range-slider:bg-[${COLORS.primary}]`
        className
      )}
      style={{
        backgroundColor: `linear-gradient(to right, ${color || COLORS.primary} ${volume * 100}%, ${color || COLORS.primary} 0%)`,
        border: `2px solid ${color || COLORS.primary}`,
      }}
      {...props}
    />
  )
}
