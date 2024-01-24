"use client"

import { gpt } from "gpti";
import { useEffect } from "react";

export default function Page({ params }) {
    useEffect(() => {
        let article = document.getElementById('article');
        gpt({
            messages: [
                {
                    role: "assistant",
                    content: "Hello! How are you today?"
                },
                {
                    role: "user",
                    content: "This is your task. Come up with an article about the next prompt without adding anything else to your response. Please do not contain the title at the beginning of the article, also don't just create a paragraph but write multiple paragraphs."
                },
                {
                    role: "assistant",
                    content: "Of course. I'll do my best to assist that function."
                }
            ],
            prompt: params.slug.split("-").join(" ").replaceAll("%3A", ":"),
            model: "gpt-3.5-turbo",
            markdown: false
        }, (err, data) => {
            if(err != null)
                article.innerText = JSON.stringify(err);
            else 
                article.innerHTML = data.gpt.replaceAll("\n", "<br/>");
        });
    }, [params.slug]);
    return (
        <>
            <strong className="text-xl">{params.slug.split("-").join(" ").replaceAll("%3A", ":")}</strong>
            <br className="p-3"/>
            <p id="article"/>
        </>
    );
}