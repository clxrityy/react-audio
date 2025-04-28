import { ComponentProps } from 'react'
import { cn } from '../../util/cn'

type ButtonProps = ComponentProps<'button'>

export const Button = ({
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'disabled:cursor-not-allowed disabled:opacity-50 focus:ring-offset-2 rounded-md px-4 py-2 transition-all duration-200 active:scale-95 disabled:active:scale-100 disabled:focus:ring-0 cursor-pointer',
        className
      )}
      {...props}>
      {children}
    </button>
  )
}
