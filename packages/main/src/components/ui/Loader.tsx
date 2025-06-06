import { ComponentProps } from 'react'
import { Icons } from '../../util'

export type LoaderProps = ComponentProps<'svg'>

export const Loader = ({ ...props }: LoaderProps) => {
  return (
    <Icons.Loader
      className={`animate-spin ${props.className}`}
      {...props}
    />
  )
}
