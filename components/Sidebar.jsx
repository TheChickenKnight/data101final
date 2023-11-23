'use client'

import { useState } from "react";
import classNames from "classnames";
import LogoIcon from "./icons/LogoIcon";
import CollapsIcon from "./icons/CollapsIcon";

export default function Sidebar() {
    const [toggleCollapse, setToggleCollapse] = useState(true);
    const [isCollapsible, setIsCollapsible] = useState(false);
    const wrapperClasses = classNames(
      "h-screen bg-slate-800 px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
      {
        ["w-80"]: !toggleCollapse,
        ["w-20"]: toggleCollapse,
      }
    );
  
    const collapseIconClasses = classNames(
      "p-4 rounded bg-slate-500 absolute right-0 hover:p-5 active:p-3.5",
      {
        "rotate-180": toggleCollapse,
      }
    );
  
    const getNavItemClasses = (menu) => {
      return classNames(
        "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
        {
          ["bg-light-lighter"]: activeMenu.id === menu.id,
        }
      );
    };
  
    const onMouseOver = () => setIsCollapsible(!isCollapsible);
  
    const handleSidebarToggle = () => setToggleCollapse(!toggleCollapse);

  
    return (
        <>
      <div
        className={wrapperClasses}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center pl-1 gap-4">
              <LogoIcon />
              <span
                className={classNames("mt-2 text-lg font-medium text-text", {
                  hidden: toggleCollapse,
                })}
              >
                Logo
              </span>
            </div>
            {isCollapsible && (
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <CollapsIcon fill="#000000" />
              </button>
            )}
          </div>
  
          <div className="flex flex-col items-start mt-24">
           
          </div>
        </div>
      </div>
      </>
    );
  };
