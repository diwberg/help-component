import { ArrowLeft } from "phosphor-react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../components/ScreenshotButton";
import { FormEvent, useState } from "react";

interface FeedbackContentProps {
    feedbackType: FeedbackType
    onRestartFeedback: () => void;
    onFeedbackSent: () => void;
}
export function FeedbackContentStep({ feedbackType, onRestartFeedback, onFeedbackSent }: FeedbackContentProps) {
    
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState<string | null>(null);
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    function handleSubmitFeedback(handle: FormEvent) {
        handle.preventDefault();
        console.log(screenshot, comment);
        onFeedbackSent()
    }
    
    return (
        <>
        <header>
            <button onClick={onRestartFeedback} type="button" className="top-5 left-5 absolute text-violetDarkA-violetA11 hover:text-violetDarkA-violetA12">
                <ArrowLeft weight="bold" className="w-4 h-4" />
            </button>

            <span className="text-xl leading-6 flex items-center gap-2">
                <img 
                src={feedbackTypeInfo.image.src} 
                alt={feedbackTypeInfo.image.alt} 
                className="w-6 h-6"
                />
                {feedbackTypeInfo.title}
            </span>
            <CloseButton />
        </header>
        <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
        onChange={(state) => setComment(state.target.value)}
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-neutral-400
        text-violetDarkA-violetA12 border-neutral-600 bg-transparent rounded-md 
        focus:border-violetDarkA-violetA7 focus:ring-violetDarkA-violetA7 
        focus:ring-1 resize-none focus:outline-none scrollbar-thumb-violetDarkA-violetA9 scrollbar-track-transparent scrollbar-thin "
        placeholder="Conte com detalhes o que está acontecendo..." />

        <footer className="flex gap-2 mt-2">

            <ScreenshotButton 
            screenshot={screenshot}
            onScreenshot={setScreenshot} />
            <button type="submit"
            className="p-2 bg-violetDarkA-violetA3 rounded-md border-transparent flex-1 flex justify-center items-center text-sm enabled:hover:ring-2 enabled:hover:ring-offset-2 enabled:hover:ring-offset-zinc-900 enabled:hover:ring-violetDarkA-violetA7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-violetDarkA-violetA3 disabled:bg-violetDarkA-violetA3/50 disabled:hover: disabled:cursor-not-allowed disabled:hover:bg-violetDarkA-violetA3/50 transition-colors"
            disabled={!comment}
            >
                Enviar feedback
            </button>
        </footer>
        </form>

    </>
    )
}