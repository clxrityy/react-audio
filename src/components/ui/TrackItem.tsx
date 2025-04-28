import { ComponentPropsWithoutRef } from 'react'
import { Track } from '../../lib'
import { cn } from '../../util/cn'
import { COLORS, ICONS } from '../../config'

interface TrackItemProps extends ComponentPropsWithoutRef<'li'> {
  track: Track
  selected: boolean
  color?: string
}

export function TrackItem({
  track,
  selected,
  color,
  ...props
}: TrackItemProps) {
  return (
    <li
      onClick={props.onClick}
      color={color}
      className={cn(
        `flex items-center p-2 z-1 ${selected ? 'opacity-100' : 'opacity-70'} rounded-md pt-3 pb-3 ${selected ? `border` : ''} my-2 cursort-pointer hover:opacity-100 justify-between w-full self-center z-30 transition-all duration-200 cursor-pointer`,
        props.className
      )}
      style={{
        borderColor: color || COLORS.primary,
      }}>
      {track.thumbnail ? (
        <img
          src={track.thumbnail}
          alt={track.title}
          style={{
            height: 30,
            width: 30,
            borderRadius: '30%',
            ...props.style,
          }}
        />
      ) : null}
      <span className="flex-1 text-center font-semibold text-sm opacity-90 z-2">
        {track.title}
      </span>
      <span className="text-lg">
        {selected ? <ICONS.selected /> : <ICONS.unselected />}
      </span>
    </li>
  )
}
