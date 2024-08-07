'use client'

import { useState } from "react";
import classNames from "classnames";
import LogoIcon from "./icons/LogoIcon";
import CollapsIcon from "./icons/CollapsIcon";
import DefaultIcon from "./icons/DefaultIcon";
import { Button } from "./ui/button";
import UserIcon from "./icons/UserIcon"
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

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
      },
      {
        name: "Trimps LLM",
        id: "trimps",
        children: [],
        parent: "projects",
        icon: ""
      },
      {
        name: "Twingles LLM",
        id: "twingles",
        children: [],
        parent: "projects",
        icon: ""
      },
      {
        name: "College Writing Project",
        id: "collegewrite",
        children: [],
        parent: "projects",
        icon: ""
      },
      {
        name: "Laptop",
        id: "laptop",
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
  
    const collapseIconClasses = classNames(
      "p-4 rounded bg-slate-500 absolute right-0 transition ease-in-out hover:scale-110 active:scale-90",
      {
        "rotate-180": toggleCollapse,
      }
    );

    const profile = () => router.push(document.getElementById('prof').innerText !== "Signed Out" ? "/dashboard" : "/auth/login");

    const onMouseOver = () => setToggleCollapse(!toggleCollapse);

    const home = () => router.push('/');

    /*getSession().then(session => {
        document.getElementById('prof').innerText = session ? session.user.username : "Signed Out";
    });*/
  
    return (
      <div
        className={classNames(
      "h-screen bg-slate-400 outline dark:outline-black outline-white dark:bg-slate-800 transition duration-1000 px-4 pt-8 pb-4 flex justify-between flex-col fixed z-50",
      {
        ["w-80"]: !toggleCollapse,
        ["w-20"]: toggleCollapse,
      }
    )}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center pl-1 gap-4">
              <button className="flex items-center cursor-pointer w-full overflow-hidden whitespace-nowrap transition ease-in-out hover:scale-110 active:scale-90 duration-300" onClick={home}>
                <LogoIcon/>
              </button>
              <button
                className={classNames("mt-2 text-lg font-medium text-text text-black dark:text-white outline outline-black dark:outline-white rounded-md p-2 pr-24 bg-slate-500 hover:bg-slate-400 transition ease-in-out hover:scale-110 active:scale-90", {
                  hidden: toggleCollapse,
                })}
                onClick={() => {
                  router.push("/search");
                }}
              >
                search
              </button>
            </div>
          </div>
  
          <ul className="flex flex-col items-start mt-24">
              {
                sections.map(section => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <li key={section.id} className="items-center">
                        <div className="items-center flex">
                          <DefaultIcon/>
                          <span 
                            className = {
                              classNames("mt-2 text-lg font-medium text-text text-black dark:text-white", {
                                hidden: toggleCollapse,
                              })
                            }>
                            {section.name}
                          </span>
                        </div>
                        <ul className = {
                          classNames("transition ease-in-out delay-150 duration-300", {hidden: toggleCollapse})
                        } >
                        {
                          section.children.map(child => {
                            return (
                              // eslint-disable-next-line react/jsx-key
                              <li key={child.id}>
                                <button
                                  className = {
                                    classNames("flex items-center cursor-pointer w-full overflow-hidden whitespace-nowrap transition ease-in-out hover:-translate-y-1 hover:scale-110 active:scale-90 active:translate-y-1 duration-300", {
                                      //["bg-light-lighter"]: activeMenu.id === menu.id,
                                    })
                                  }
                                  onClick={() => {
                                    router.push("/" + section.id + "/" + child.id);
                                    if (child.id == "data101")
                                      setTimeout(() => initAddedDCLightExercises(), 5000);
                                  }}
                                >
                                  <span className="pl-5 mt-1 text-m font-medium text-text text-black dark:text-white">|</span>
                                  <span 
                                    className = {
                                      classNames("pl-5 mt-1 text-m font-medium text-text text-black dark:text-white", {
                                        
                                      })
                                    }>
                                    {child.name}
                                </span>
                              </button>
                              </li>
                            )
                          })
                        }
                        </ul>
                      </li>
                    )
                })
              }
          </ul>
        </div>
        <div className="fixed bottom-5">
              <Button onClick={profile} className={classNames("pt-4 pr-0 transition-transform duration-1000", {"w-60": !toggleCollapse})}><UserIcon /> <p id='prof' className={classNames("pb-3", {"hidden": toggleCollapse})}></p> </Button>
        </div>
      </div>
    );
  };
