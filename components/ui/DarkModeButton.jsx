"use client";

import { Button } from "./button"
import DarkIcon from "../icons/DarkIcon"

export default function DarkModeButton({classy, ...props}) {
    function darkMode() {
        console.log(classy)
        let body = document.getElementById("body");
        if (body.classList.contains("dark")) 
            body.classList.remove("dark");
        else
            body.classList.add("dark");
    }
    return (
        <Button {...props} onClick={() => darkMode()} className={"absolute bottom-5 right-5 p-4 dark:bg-slate-800 bg-slate-400" + classy}><DarkIcon className="stroke-black dark:stroke-white"/></Button>
    )
}