"use client"

import { gpt } from "gpti";
import { useRouter } from "next/navigation";


export default function Search() {
    const router = useRouter();

    function handleSubmit() {
        let list = document.getElementById('list');
        list.innerHTML = "";
        gpt({
            messages: [
                {
                    role: "assistant",
                    content: "Hello! How are you today?"
                },
                {
                    role: "user",
                    content: "This is your task. Come up with 3-5 article titles and a short blurb that could be written about the next prompt. Please write them in the syntax as follows: [ArticleTitle]|[Article blurb]. This will be one line, each following article will be on the next line with the same syntax. DO NOT include quotations around any article titles, nor bullet each line."
                },
                {
                    role: "assistant",
                    content: "Of course. I'll do my best to assist that function."
                }
            ],
            prompt: document.getElementById('search').value,
            model: "gpt-3.5-turbo",
            markdown: false
        }, (err, data) => {
            if(err != null)
                console.error(err);
            else {
                console.log(data.gpt)
                list.innerHTML = data.gpt.split("\n\n").filter(text => text.includes("|")).map((data, i) => {
                    let parts = data.replace(/([0-9]\. |")/g, "").split("|");
                    return "<li key=\"" + i + "\" class=\"p-5 hover:bg-slate-500 rounded-xl\"><strong class=\"text-blue-400\">" + parts[0] + "</strong><br/><p class=\"text-slate-200\">" + parts[1] + "</p></li>";
                }).join("");
                for (let child of list.children) 
                    child.addEventListener("click", () => router.push("/articles/" + child.textContent.split("  ")[0].split(" ").join("-").split(/(?<=[a-z])[A-Z]/g)[0]));
            }
        });
    }

    return (
        <div>
           <div className="bg-slate-800 p-2 rounded-xl">
                <input className="bg-slate-600 p-2 rounded-md m-1 w-11/12" name="search" type="search" id="search" defaultValue="Search"/>
                <button className="m-4 p-2 rounded-md bg-slate-600 hover:p-3 active:p-1" onClick={handleSubmit}>Search</button>
            </div>
            <div className="bg-slate-800 rounded-xl">
                <ul className="bg-slate-600" id="list"/>
            </div>
        </div>
    )
}
