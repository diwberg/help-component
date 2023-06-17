import bugImg from '../../assets/bug.svg'
import ideaImg from '../../assets/idea.svg'
import otherImg from '../../assets/other.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./ReportsSteps/FeedbackTypeStep";
import { FeedbackContentStep } from "./ReportsSteps/FeedbackContentStep";
import { FeedbackSuccessStep } from './ReportsSteps/FeedbackSuccessStepStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problemas',
        image: {
            src: bugImg,
            alt: 'Icon para report de bug'
        }
    },
    IDEA: {
        title: 'Ideias',
        image: {
            src: ideaImg,
            alt: 'Icon para report ideias'
        }
    },
    OTHER: {
        title: 'Outros',
        image: {
            src: otherImg,
            alt: 'Icon para report de outros tipos'
        }
    }
}
export type FeedbackType = keyof typeof feedbackTypes;
export function ToggleModal() {

    const [feedback, setFeedback] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedback(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-max ">
            {feedbackSent ? (
                <FeedbackSuccessStep onRestartFeedback={handleRestartFeedback} />
            ) : (
                <>
                {!feedback ?
                    (<FeedbackTypeStep onFeedbackChanged={setFeedback} />)
                    :
                    (<FeedbackContentStep onRestartFeedback={handleRestartFeedback} feedbackType={feedback} onFeedbackSent={() => setFeedbackSent(true)} />)
                }
                </>
            )}

            <footer className="text-xs text-neutral-400">
                <span><a href="#" className="underline underline-offset-4" >ICYou</a> - Team</span>
            </footer>
        </div>
    )
}