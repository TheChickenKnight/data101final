'use client'

import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";

export default function Sidebar() {
    const [toggleCollapse, setToggleColllapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const wrapperClasses = classNames("bg-slate-500 h-scree px-4 pt-8 pb-4 flex justify-between flex-col w-80 w-" + (toggleCollapse ? 20 : 80));

    const collapseIconClasses = classNames("p-4 rounded absolute right-0" + (toggleCollapse ? "rotate-180" : ""));
        
    const onMouseOver = () => setIsCollapsible(!isCollapsible);
    const handleSidebarToggle = () => setToggleColllapse(!toggleCollapse);

    return (
        <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
            <div className="flex flex-col">
                <div className="flex items-center justify-between relative ">
                    <div className="flex items-center pl-1 gap-4">
                        <Image alt="logo"/>
                        <span className={classNames("mt-2 text-lg font-medium" + (toggleCollapse ? "hidden" : ""))}> 
                            Logo
                        </span>         
                    </div>
                    {isCollapsible && (
                        <button className={collapseIconClasses} onClick={handleSidebarToggle}>
                        </button>
                    )}
                </div>
            </div>
            <div></div>
        </div>
    )
}