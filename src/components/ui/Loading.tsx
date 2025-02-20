import { ComponentProps } from 'react'
import { ICONS } from '../../config'
import { cn } from '../../util/cn'

interface LoadingProps extends ComponentProps<'div'> {}

export const Loading = ({ className, ...props }: LoadingProps) => {
    const Icon = ICONS.loading

    return (
        <div
            className={cn(
                'flex items-center justify-center animate-spin',
                className
            )}
            {...props}
        >
            <Icon />
        </div>
    )
}
