import { CheckSquare } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
    onRestartFeedback: () => void;

}
export function FeedbackSuccessStep({onRestartFeedback}: FeedbackSuccessStepProps) {
    return (
        <>
        <header>
            <CloseButton />
        </header>
        <div className="flex flex-col items-center py-10 w-[304px]">
        <CheckSquare weight="fill" className="w-10 h-10 text-green-800"  />
        <span className="text-xl mt-2">Obrigado pelo seu feedback</span>

        <button 
        onClick={onRestartFeedback}
        className="p-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent justify-center items-center text-sm leading-6 hover:ring-2 hover:ring-offset-2 hover:ring-offset-zinc-900 hover:ring-violetDarkA-violetA7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-violetDarkA-violetA3 transition-colors">
            Quero enviar outro feedback
        </button>
        </div>
        </>
    )
}