

import type { LucideIcon } from 'lucide-react'


type IconButtonProps = {
    Icon: LucideIcon
    handleClick: () => void
}


const IconButton = ({ Icon, handleClick }: IconButtonProps) => {
    return (
        <button
            type='button'
            onClick={handleClick}>
            <Icon />
        </button>

    )
}


export { IconButton }