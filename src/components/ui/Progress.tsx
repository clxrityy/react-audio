import { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../util/cn'
import { COLORS } from '../../config'

interface ProgressBarProps extends ComponentPropsWithoutRef<'input'> {
  duration: number
  current_progress: number
  buffered: number
  color?: string
}

export const Progress = ({
  duration,
  current_progress,
  buffered,
  color,
  ...props
}: ProgressBarProps) => {
  // Prevent NaN or division errors
  const width = duration > 0 ? (current_progress / duration) * 100 : 0
  const bufferedWidth = duration > 0 ? (buffered / duration) * 100 : 0

  return (
    <div
      className={cn(
        'relative w-60 h-2 bg-gray-300 rounded overflow-hidden',
        props.className
      )}>
      {/* Buffered Bar */}
      <div
        className="absolute top-0 left-0 h-full bg-gray-400 rounded transition-all duration-200"
        style={{ width: `${bufferedWidth}%` }}></div>

      {/* Progress Bar */}
      <div
        className={`absolute top-0 left-0 h-full rounded transition-all duration-200`}
        style={{
          width: `${width}%`,
          backgroundColor: color || COLORS.primary,
        }}></div>

      {/* Invisible Range Input for Interaction */}
      <input
        type="range"
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        min={0}
        max={duration || 1} // Avoid division by zero
        value={current_progress || 0}
        onChange={(e) => props.onChange?.(e)}
        {...props}
      />
    </div>
  )
}
