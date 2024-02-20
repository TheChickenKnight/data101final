"use client";

import { Button } from "./button"
import DarkIcon from "../icons/DarkIcon"

export default function DarkModeButton({classy, ...props}) {
    function darkMode() {
        let body = document.getElementById("body");
        let button = document.getElementById("drkicon");
        if (body.classList.contains("dark"))  {
            body.classList.remove("dark");
            button.outerHTML = button.outerHTML.replace(/fill="#ffffff"/g, "fill=\"#1C274C\"")
        } else {
            body.classList.add("dark");
            button.outerHTML = button.outerHTML.replace(/fill="#1C274C"/g, "fill=\"#ffffff\"")
        }
    }
    return (
        <Button {...props} id="dkMdBtn" onClick={darkMode} className={"fixed z-50 bottom-5 right-5 p-4 dark:bg-slate-800 bg-slate-400" + classy}><DarkIcon id="drkicon" className="stroke-white dark:stroke-black"/></Button>
    )
}