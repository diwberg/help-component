import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotProps {
    screenshot: string | null;
    onScreenshot: (screenshot: string | null) => void;
}

export function ScreenshotButton( { onScreenshot, screenshot }: ScreenshotProps ) {
    const [isTakingScreenshot, setTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector("html")!); 
        const base64image = canvas.toDataURL("image/png");
        
        onScreenshot(base64image)
        setTakingScreenshot(false)
    }

    if(screenshot) {
        return (
            <button type="button" className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end transition-all"
            style={{
                backgroundImage: `url(${screenshot})`,
                backgroundPosition: 'right bottom',
                backgroundSize: 180
            }}
            >
            <Trash onClick={() => onScreenshot(null)} weight="fill" className="text-violetDarkA-violetA11/90 hover:text-violetDarkA-violetA12" />
            </button>
        )
    }
    return (
        <>
            <button type="button"
            onClick={handleTakeScreenshot}
                className="p-2 bg-zinc-800 rounded-md border-transparent justify-center items-center text-sm hover:ring-2 hover:ring-offset-2 hover:ring-offset-zinc-900 hover:ring-violetDarkA-violetA7 hover:text-violetDarkA-violetA7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-violetDarkA-violetA3 transition-colors"
            >
                {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" /> }
            </button>
        </>
    )
}