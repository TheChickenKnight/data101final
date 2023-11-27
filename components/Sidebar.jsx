'use client'

import { useState } from "react";
import classNames from "classnames";
import LogoIcon from "./icons/LogoIcon";
import CollapsIcon from "./icons/CollapsIcon";
import DefaultIcon from "./icons/DefaultIcon";
import { useRouter } from "next/navigation";
//bruh why is importing so bad
const sections = [
  {
    name: "Personal",
    id: "personal",
    children: [
      {
        name: "About Me",
        id: "aboutme",
        children: [],
        parent: "personal",
        icon: ""
      },
      {
        name: "Resume",
        id: "resume",
        children: [],
        parent: "personal",
        icon: ""
      }
    ],
    parent: "",
    icon: ""
  },
  {
    name: "Projects",
    id: "projects",
    children: [
      {
        name: "Data 101 Final",
        id: "data101",
        children: [],
        parent: "projects",
        icon: ""
      }
    ],
    parent: "",
    icon: ""
  }
];



export default function Sidebar() {
    let router = useRouter();
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
  
    /*const getNavItemClasses = (menu) => {
      return classNames(
        "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
        {
          ["bg-light-lighter"]: activeMenu.id === menu.id,
        }
      );
    };*/
  
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
              {
                sections.map(section => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div className="items-center">
                        <div className="items-center flex">
                          <DefaultIcon/>
                          <span 
                            className = {
                              classNames("mt-2 text-lg font-medium text-text", {
                                hidden: toggleCollapse,
                              })
                            }>
                            {section.name}
                          </span>
                        </div>
                        {
                          section.children.map(child => {
                            return (
                              // eslint-disable-next-line react/jsx-key
                              <button
                                className = {
                                  classNames("flex items-center cursor-pointer hover:bg-black rounded w-full overflow-hidden whitespace-nowrap hover:p-5 active:p-3.5", {
                                    //["bg-light-lighter"]: activeMenu.id === menu.id,
                                  })
                                }
                                onClick={() => {router.push("/" + section.id + "/" + child.id)}}
                              >
                                <span className="pl-5 mt-1 text-m font-medium text-text">|</span>
                                <span 
                                  className = {
                                    classNames("pl-5 mt-1 text-m font-medium text-text", {
                                      hidden: toggleCollapse,
                                    })
                                  }>
                                  {child.name}
                              </span>
                             </button>
                            )
                          })
                        }
                      </div>
                    )
                })
              }
          </div>
        </div>
      </div>
      </>
    );
  };
