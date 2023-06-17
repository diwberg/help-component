import { ChatTeardropDots } from 'phosphor-react'

//Popover for acessibility with headlessui
import { Popover } from '@headlessui/react'
import { ToggleModal } from '../ToggleModal'


export function Widget() {
    

    return (
        <Popover className="absolute bottom-3 right-3 md:bottom-6 md:right-6 flex flex-col items-end">
            <Popover.Panel>
                <ToggleModal />
            </Popover.Panel>

            <Popover.Button className="bg-violetDarkA-violetA3 rounded-full px-3 h-12 flex items-center group hover:bg-violetDarkA-violetA10 ">
                <ChatTeardropDots className="w-6 h-6" />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                <span />
                    Feedback
                </span>
            </Popover.Button>

        </Popover>
    )
}