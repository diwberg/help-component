import { X } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function CloseButton() {
    return (
    <Popover.Button 
    className="top-5 right-5 absolute text-violetDarkA-violetA11 hover:text-violetDarkA-violetA12"
    title="Close"
    >
        <X className="w-4 h-4" weight="bold" />
    </Popover.Button> 
    )
}